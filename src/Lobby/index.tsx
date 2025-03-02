import { FC } from 'react';

import { Link } from 'react-router-dom';

import { getGraphqlQueryKey } from '@app/core/graphql/createGetQueryKet';
import { createGraphQLClient } from '@app/core/graphql/createGraphQLClient';
import { EQueryKey } from '@app/core/query-key';
import { User } from '@supabase/supabase-js';
import { useMutation, useQuery } from '@tanstack/react-query';

import { supabase } from '../supabaseClient';

import { PageMain } from '@app/components/PageMain';
import { rpc } from '@app/rpc';
import { Button, Stack, Typography } from '@mui/material';
import { cardTowersQueryDocument } from './graphql-documents/cardTowersQueryDocument';

const graphqlClient = createGraphQLClient();

export const Lobby: FC = () => {
  const { data: user } = useQuery({
    queryKey: [EQueryKey.user],
    queryFn: () => supabase.auth.getUser(),
    select: (res) => res.data.user,
  });

  const { data: usersInLobby, refetch: refetchUsersInLobby } = useQuery({
    queryKey: [EQueryKey.usersInLobby],
    queryFn: async () => await supabase.from('user_in_lobby').select(),
    select: (res) => res.data,
  });

  const { data: userBoards, refetch: refetchUserBoards } = useQuery({
    queryKey: [getGraphqlQueryKey(cardTowersQueryDocument), user?.id],
    enabled: !!user,
    queryFn: async ({ signal }) => {
      if (!user) throw new Error('User must be defined');
      return graphqlClient.request({
        document: cardTowersQueryDocument,
        signal,
        variables: { userId: user.id },
      });
    },
    select: (res) => res.card_towerCollection?.edges,
  });

  const initializeMutation = useMutation({
    mutationFn: async () => {
      const token = (await supabase.auth.getSession()).data.session?.access_token;
      if (!token) throw new Error('No token');
      return rpc.authenticated.initializeBoard(token);
    },
    onSuccess: () => refetchUserBoards(),
  });

  const enterLobbyMutation = useMutation({
    mutationFn: async (user: User) => supabase.from('user_in_lobby').insert({ user_id: user.id }),
    onSuccess: () => refetchUsersInLobby(),
  });

  const leaveLobbyMutation = useMutation({
    mutationFn: async (user: User) => supabase.from('user_in_lobby').delete().eq('user_id', user.id),
    onSuccess: () => refetchUsersInLobby(),
  });

  const isInLobby = !!user?.id && !!usersInLobby?.find((it) => it.user_id === user.id);

  if (!user) return null;

  return (
    <PageMain>
      <Stack direction="column" gap={2}>
        <Typography variant="h1">Lobby</Typography>
        <Typography variant="body1">Users in lobby: {usersInLobby?.length ?? 0}</Typography>
        <Typography variant="body1">Me in lobby: {isInLobby ? 'Yes' : 'No'}</Typography>
        <div>
          {isInLobby ? (
            <Button
              variant="contained"
              disabled={leaveLobbyMutation.isPending}
              onClick={() => leaveLobbyMutation.mutate(user)}
            >
              Don&apos;t want to play
            </Button>
          ) : (
            <Button
              variant="contained"
              disabled={enterLobbyMutation.isPending}
              onClick={() => enterLobbyMutation.mutate(user)}
            >
              Want to play
            </Button>
          )}
        </div>
        <div>
          {isInLobby && usersInLobby?.length === 2 && (
            <Button
              variant="contained"
              disabled={initializeMutation.isPending}
              onClick={() => initializeMutation.mutate()}
            >
              Start game
            </Button>
          )}
        </div>
        <div>
          <h2>Your boards</h2>
          <div>
            {userBoards?.map(({ node: tower }) => (
              // TODO: fix this
              <div key={tower.board!.id}>
                <Link to={`/board/${tower.board!.id}`}>
                  #{tower.board!.id} from {new Date(tower.board!.created_at).toLocaleString('ru-ru')}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Button onClick={() => supabase.auth.signOut()}>log out</Button>
        </div>
      </Stack>
    </PageMain>
  );
};
