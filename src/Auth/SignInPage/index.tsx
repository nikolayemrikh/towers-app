import { supabase } from '@app/supabaseClient';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Alert,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string({ required_error: 'Email is required' }).email().min(1),
  password: z.string({ required_error: 'Password is required' }).min(1),
});

type TFormData = z.infer<typeof schema>;

export const SignInPage: FC = () => {
  const [error, setError] = useState<string | null>(null);

  const form = useForm<TFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const mutation = useMutation({
    mutationFn: ({ email, password }: TFormData) => supabase.auth.signInWithPassword({ email, password }),
    onSuccess: ({ error }) => {
      if (error) {
        setError(error?.message);
      }
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <Stack
      flexGrow={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
      padding={2}
      sx={(t) => ({ [t.breakpoints.up('sm')]: { padding: 4 } })}
    >
      <Paper elevation={2} sx={{ flexBasis: 450 }}>
        <Stack direction="column" alignItems="center" justifyContent="center" gap={2} padding={4}>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <Stack component="form" onSubmit={handleSubmit} noValidate direction="column" width="100%" gap={2}>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={form.formState.errors.email != null}
                helperText={form.formState.errors.email?.message}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={form.formState.errors.email != null ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={form.formState.errors.password != null}
                helperText={form.formState.errors.password?.message}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={form.formState.errors.password != null ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained">
              Sign in
            </Button>
          </Stack>
          <Divider>or</Divider>
          <Stack direction="column" width="100%" gap={2}>
            <Button fullWidth variant="outlined" onClick={() => supabase.auth.signInAnonymously()}>
              Sign in anonymously on this device
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};
