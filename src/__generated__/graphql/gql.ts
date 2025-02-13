/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query boardCollection($boardId: BigInt!) {\n    boardCollection(filter: { id: { eq: $boardId } }) {\n      edges {\n        node {\n          id\n          pulled_card_number_to_change\n          opened_card_number_to_use\n          turn_user_id\n          card_towerCollection {\n            edges {\n              node {\n                id\n                user_id\n                card_in_towerCollection {\n                  edges {\n                    node {\n                      id\n                      card_number\n                      is_protected\n                    }\n                  }\n                }\n              }\n            }\n          }\n          card_in_board_deckCollection {\n            edges {\n              node {\n                id\n                card_number\n              }\n            }\n          }\n          card_in_board_openedCollection {\n            edges {\n              node {\n                id\n                card_number\n              }\n            }\n          }\n          card_in_board_discard_deckCollection {\n            edges {\n              node {\n                id\n                card_number\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.BoardCollectionDocument,
    "\n  query cardVariants {\n    card_variantCollection(first: 100, after: null) {\n      edges {\n        node {\n          power\n          number\n        }\n      }\n    }\n  }\n": types.CardVariantsDocument,
    "\n  query cardTowers($userId: UUID!) {\n    card_towerCollection(filter: { user_id: { eq: $userId } }, orderBy: { created_at: DescNullsLast }) {\n      edges {\n        node {\n          id\n          created_at\n          board {\n            id\n            turn_user_id\n            created_at\n          }\n        }\n      }\n    }\n  }\n": types.CardTowersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query boardCollection($boardId: BigInt!) {\n    boardCollection(filter: { id: { eq: $boardId } }) {\n      edges {\n        node {\n          id\n          pulled_card_number_to_change\n          opened_card_number_to_use\n          turn_user_id\n          card_towerCollection {\n            edges {\n              node {\n                id\n                user_id\n                card_in_towerCollection {\n                  edges {\n                    node {\n                      id\n                      card_number\n                      is_protected\n                    }\n                  }\n                }\n              }\n            }\n          }\n          card_in_board_deckCollection {\n            edges {\n              node {\n                id\n                card_number\n              }\n            }\n          }\n          card_in_board_openedCollection {\n            edges {\n              node {\n                id\n                card_number\n              }\n            }\n          }\n          card_in_board_discard_deckCollection {\n            edges {\n              node {\n                id\n                card_number\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query boardCollection($boardId: BigInt!) {\n    boardCollection(filter: { id: { eq: $boardId } }) {\n      edges {\n        node {\n          id\n          pulled_card_number_to_change\n          opened_card_number_to_use\n          turn_user_id\n          card_towerCollection {\n            edges {\n              node {\n                id\n                user_id\n                card_in_towerCollection {\n                  edges {\n                    node {\n                      id\n                      card_number\n                      is_protected\n                    }\n                  }\n                }\n              }\n            }\n          }\n          card_in_board_deckCollection {\n            edges {\n              node {\n                id\n                card_number\n              }\n            }\n          }\n          card_in_board_openedCollection {\n            edges {\n              node {\n                id\n                card_number\n              }\n            }\n          }\n          card_in_board_discard_deckCollection {\n            edges {\n              node {\n                id\n                card_number\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query cardVariants {\n    card_variantCollection(first: 100, after: null) {\n      edges {\n        node {\n          power\n          number\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query cardVariants {\n    card_variantCollection(first: 100, after: null) {\n      edges {\n        node {\n          power\n          number\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query cardTowers($userId: UUID!) {\n    card_towerCollection(filter: { user_id: { eq: $userId } }, orderBy: { created_at: DescNullsLast }) {\n      edges {\n        node {\n          id\n          created_at\n          board {\n            id\n            turn_user_id\n            created_at\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query cardTowers($userId: UUID!) {\n    card_towerCollection(filter: { user_id: { eq: $userId } }, orderBy: { created_at: DescNullsLast }) {\n      edges {\n        node {\n          id\n          created_at\n          board {\n            id\n            turn_user_id\n            created_at\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;