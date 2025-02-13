/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date wihout time information */
  Date: { input: string; output: string; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: string; output: string; }
  /** A universally unique identifier */
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `board` collection */
  deleteFromboardCollection: BoardDeleteResponse;
  /** Deletes zero or more records from the `card_in_board_deck` collection */
  deleteFromcard_in_board_deckCollection: Card_In_Board_DeckDeleteResponse;
  /** Deletes zero or more records from the `card_in_board_discard_deck` collection */
  deleteFromcard_in_board_discard_deckCollection: Card_In_Board_Discard_DeckDeleteResponse;
  /** Deletes zero or more records from the `card_in_board_opened` collection */
  deleteFromcard_in_board_openedCollection: Card_In_Board_OpenedDeleteResponse;
  /** Deletes zero or more records from the `card_in_tower` collection */
  deleteFromcard_in_towerCollection: Card_In_TowerDeleteResponse;
  /** Deletes zero or more records from the `card_tower` collection */
  deleteFromcard_towerCollection: Card_TowerDeleteResponse;
  /** Deletes zero or more records from the `card_variant` collection */
  deleteFromcard_variantCollection: Card_VariantDeleteResponse;
  /** Deletes zero or more records from the `user_in_lobby` collection */
  deleteFromuser_in_lobbyCollection: User_In_LobbyDeleteResponse;
  /** Adds one or more `board` records to the collection */
  insertIntoboardCollection?: Maybe<BoardInsertResponse>;
  /** Adds one or more `card_in_board_deck` records to the collection */
  insertIntocard_in_board_deckCollection?: Maybe<Card_In_Board_DeckInsertResponse>;
  /** Adds one or more `card_in_board_discard_deck` records to the collection */
  insertIntocard_in_board_discard_deckCollection?: Maybe<Card_In_Board_Discard_DeckInsertResponse>;
  /** Adds one or more `card_in_board_opened` records to the collection */
  insertIntocard_in_board_openedCollection?: Maybe<Card_In_Board_OpenedInsertResponse>;
  /** Adds one or more `card_in_tower` records to the collection */
  insertIntocard_in_towerCollection?: Maybe<Card_In_TowerInsertResponse>;
  /** Adds one or more `card_tower` records to the collection */
  insertIntocard_towerCollection?: Maybe<Card_TowerInsertResponse>;
  /** Adds one or more `card_variant` records to the collection */
  insertIntocard_variantCollection?: Maybe<Card_VariantInsertResponse>;
  /** Adds one or more `user_in_lobby` records to the collection */
  insertIntouser_in_lobbyCollection?: Maybe<User_In_LobbyInsertResponse>;
  /** Updates zero or more records in the `board` collection */
  updateboardCollection: BoardUpdateResponse;
  /** Updates zero or more records in the `card_in_board_deck` collection */
  updatecard_in_board_deckCollection: Card_In_Board_DeckUpdateResponse;
  /** Updates zero or more records in the `card_in_board_discard_deck` collection */
  updatecard_in_board_discard_deckCollection: Card_In_Board_Discard_DeckUpdateResponse;
  /** Updates zero or more records in the `card_in_board_opened` collection */
  updatecard_in_board_openedCollection: Card_In_Board_OpenedUpdateResponse;
  /** Updates zero or more records in the `card_in_tower` collection */
  updatecard_in_towerCollection: Card_In_TowerUpdateResponse;
  /** Updates zero or more records in the `card_tower` collection */
  updatecard_towerCollection: Card_TowerUpdateResponse;
  /** Updates zero or more records in the `card_variant` collection */
  updatecard_variantCollection: Card_VariantUpdateResponse;
  /** Updates zero or more records in the `user_in_lobby` collection */
  updateuser_in_lobbyCollection: User_In_LobbyUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromboardCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BoardFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcard_In_Board_DeckCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Card_In_Board_DeckFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcard_In_Board_Discard_DeckCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Card_In_Board_Discard_DeckFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcard_In_Board_OpenedCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Card_In_Board_OpenedFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcard_In_TowerCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Card_In_TowerFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcard_TowerCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Card_TowerFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcard_VariantCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Card_VariantFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromuser_In_LobbyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_In_LobbyFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoboardCollectionArgs = {
  objects: Array<BoardInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocard_In_Board_DeckCollectionArgs = {
  objects: Array<Card_In_Board_DeckInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocard_In_Board_Discard_DeckCollectionArgs = {
  objects: Array<Card_In_Board_Discard_DeckInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocard_In_Board_OpenedCollectionArgs = {
  objects: Array<Card_In_Board_OpenedInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocard_In_TowerCollectionArgs = {
  objects: Array<Card_In_TowerInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocard_TowerCollectionArgs = {
  objects: Array<Card_TowerInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocard_VariantCollectionArgs = {
  objects: Array<Card_VariantInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntouser_In_LobbyCollectionArgs = {
  objects: Array<User_In_LobbyInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateboardCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BoardFilter>;
  set: BoardUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecard_In_Board_DeckCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Card_In_Board_DeckFilter>;
  set: Card_In_Board_DeckUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecard_In_Board_Discard_DeckCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Card_In_Board_Discard_DeckFilter>;
  set: Card_In_Board_Discard_DeckUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecard_In_Board_OpenedCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Card_In_Board_OpenedFilter>;
  set: Card_In_Board_OpenedUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecard_In_TowerCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Card_In_TowerFilter>;
  set: Card_In_TowerUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecard_TowerCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Card_TowerFilter>;
  set: Card_TowerUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecard_VariantCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Card_VariantFilter>;
  set: Card_VariantUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateuser_In_LobbyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_In_LobbyFilter>;
  set: User_In_LobbyUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export enum Power {
  MoveDownByTwo = 'Move_down_by_two',
  MoveUpByTwo = 'Move_up_by_two',
  Protect = 'Protect',
  RemoveBottom = 'Remove_bottom',
  RemoveMiddle = 'Remove_middle',
  RemoveTop = 'Remove_top',
  SwapNeighbours = 'Swap_neighbours',
  SwapThroughOne = 'Swap_through_one'
}

/** Boolean expression comparing fields on type "Power" */
export type PowerFilter = {
  eq?: InputMaybe<Power>;
  in?: InputMaybe<Array<Power>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Power>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `board` */
  boardCollection?: Maybe<BoardConnection>;
  /** A pagable collection of type `card_in_board_deck` */
  card_in_board_deckCollection?: Maybe<Card_In_Board_DeckConnection>;
  /** A pagable collection of type `card_in_board_discard_deck` */
  card_in_board_discard_deckCollection?: Maybe<Card_In_Board_Discard_DeckConnection>;
  /** A pagable collection of type `card_in_board_opened` */
  card_in_board_openedCollection?: Maybe<Card_In_Board_OpenedConnection>;
  /** A pagable collection of type `card_in_tower` */
  card_in_towerCollection?: Maybe<Card_In_TowerConnection>;
  /** A pagable collection of type `card_tower` */
  card_towerCollection?: Maybe<Card_TowerConnection>;
  /** A pagable collection of type `card_variant` */
  card_variantCollection?: Maybe<Card_VariantConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `user_in_lobby` */
  user_in_lobbyCollection?: Maybe<User_In_LobbyConnection>;
};


/** The root type for querying data */
export type QueryBoardCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BoardFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BoardOrderBy>>;
};


/** The root type for querying data */
export type QueryCard_In_Board_DeckCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_In_Board_DeckFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_In_Board_DeckOrderBy>>;
};


/** The root type for querying data */
export type QueryCard_In_Board_Discard_DeckCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_In_Board_Discard_DeckFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_In_Board_Discard_DeckOrderBy>>;
};


/** The root type for querying data */
export type QueryCard_In_Board_OpenedCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_In_Board_OpenedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_In_Board_OpenedOrderBy>>;
};


/** The root type for querying data */
export type QueryCard_In_TowerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_In_TowerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_In_TowerOrderBy>>;
};


/** The root type for querying data */
export type QueryCard_TowerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_TowerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_TowerOrderBy>>;
};


/** The root type for querying data */
export type QueryCard_VariantCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_VariantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_VariantOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryUser_In_LobbyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_In_LobbyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_In_LobbyOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type Board = Node & {
  __typename?: 'board';
  card_in_board_deckCollection?: Maybe<Card_In_Board_DeckConnection>;
  card_in_board_discard_deckCollection?: Maybe<Card_In_Board_Discard_DeckConnection>;
  card_in_board_openedCollection?: Maybe<Card_In_Board_OpenedConnection>;
  card_towerCollection?: Maybe<Card_TowerConnection>;
  card_variant?: Maybe<Card_Variant>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  opened_card_number_to_use?: Maybe<Scalars['Int']['output']>;
  pulled_card_number_to_change?: Maybe<Scalars['Int']['output']>;
  turn_user_id?: Maybe<Scalars['UUID']['output']>;
};


export type BoardCard_In_Board_DeckCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_In_Board_DeckFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_In_Board_DeckOrderBy>>;
};


export type BoardCard_In_Board_Discard_DeckCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_In_Board_Discard_DeckFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_In_Board_Discard_DeckOrderBy>>;
};


export type BoardCard_In_Board_OpenedCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_In_Board_OpenedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_In_Board_OpenedOrderBy>>;
};


export type BoardCard_TowerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_TowerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_TowerOrderBy>>;
};

export type BoardConnection = {
  __typename?: 'boardConnection';
  edges: Array<BoardEdge>;
  pageInfo: PageInfo;
};

export type BoardDeleteResponse = {
  __typename?: 'boardDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Board>;
};

export type BoardEdge = {
  __typename?: 'boardEdge';
  cursor: Scalars['String']['output'];
  node: Board;
};

export type BoardFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<BoardFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<BoardFilter>;
  opened_card_number_to_use?: InputMaybe<IntFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<BoardFilter>>;
  pulled_card_number_to_change?: InputMaybe<IntFilter>;
  turn_user_id?: InputMaybe<UuidFilter>;
};

export type BoardInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  opened_card_number_to_use?: InputMaybe<Scalars['Int']['input']>;
  pulled_card_number_to_change?: InputMaybe<Scalars['Int']['input']>;
  turn_user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type BoardInsertResponse = {
  __typename?: 'boardInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Board>;
};

export type BoardOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  opened_card_number_to_use?: InputMaybe<OrderByDirection>;
  pulled_card_number_to_change?: InputMaybe<OrderByDirection>;
  turn_user_id?: InputMaybe<OrderByDirection>;
};

export type BoardUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  opened_card_number_to_use?: InputMaybe<Scalars['Int']['input']>;
  pulled_card_number_to_change?: InputMaybe<Scalars['Int']['input']>;
  turn_user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type BoardUpdateResponse = {
  __typename?: 'boardUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Board>;
};

export type Card_In_Board_Deck = Node & {
  __typename?: 'card_in_board_deck';
  board?: Maybe<Board>;
  board_id?: Maybe<Scalars['BigInt']['output']>;
  card_number: Scalars['Int']['output'];
  card_variant: Card_Variant;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type Card_In_Board_DeckConnection = {
  __typename?: 'card_in_board_deckConnection';
  edges: Array<Card_In_Board_DeckEdge>;
  pageInfo: PageInfo;
  /** The total number of records matching the `filter` criteria */
  totalCount: Scalars['Int']['output'];
};

export type Card_In_Board_DeckDeleteResponse = {
  __typename?: 'card_in_board_deckDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_In_Board_Deck>;
};

export type Card_In_Board_DeckEdge = {
  __typename?: 'card_in_board_deckEdge';
  cursor: Scalars['String']['output'];
  node: Card_In_Board_Deck;
};

export type Card_In_Board_DeckFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Card_In_Board_DeckFilter>>;
  board_id?: InputMaybe<BigIntFilter>;
  card_number?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Card_In_Board_DeckFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Card_In_Board_DeckFilter>>;
};

export type Card_In_Board_DeckInsertInput = {
  board_id?: InputMaybe<Scalars['BigInt']['input']>;
  card_number?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Card_In_Board_DeckInsertResponse = {
  __typename?: 'card_in_board_deckInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_In_Board_Deck>;
};

export type Card_In_Board_DeckOrderBy = {
  board_id?: InputMaybe<OrderByDirection>;
  card_number?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type Card_In_Board_DeckUpdateInput = {
  board_id?: InputMaybe<Scalars['BigInt']['input']>;
  card_number?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Card_In_Board_DeckUpdateResponse = {
  __typename?: 'card_in_board_deckUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_In_Board_Deck>;
};

export type Card_In_Board_Discard_Deck = Node & {
  __typename?: 'card_in_board_discard_deck';
  board: Board;
  board_id: Scalars['BigInt']['output'];
  card_number: Scalars['Int']['output'];
  card_variant: Card_Variant;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type Card_In_Board_Discard_DeckConnection = {
  __typename?: 'card_in_board_discard_deckConnection';
  edges: Array<Card_In_Board_Discard_DeckEdge>;
  pageInfo: PageInfo;
};

export type Card_In_Board_Discard_DeckDeleteResponse = {
  __typename?: 'card_in_board_discard_deckDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_In_Board_Discard_Deck>;
};

export type Card_In_Board_Discard_DeckEdge = {
  __typename?: 'card_in_board_discard_deckEdge';
  cursor: Scalars['String']['output'];
  node: Card_In_Board_Discard_Deck;
};

export type Card_In_Board_Discard_DeckFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Card_In_Board_Discard_DeckFilter>>;
  board_id?: InputMaybe<BigIntFilter>;
  card_number?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Card_In_Board_Discard_DeckFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Card_In_Board_Discard_DeckFilter>>;
};

export type Card_In_Board_Discard_DeckInsertInput = {
  board_id?: InputMaybe<Scalars['BigInt']['input']>;
  card_number?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Card_In_Board_Discard_DeckInsertResponse = {
  __typename?: 'card_in_board_discard_deckInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_In_Board_Discard_Deck>;
};

export type Card_In_Board_Discard_DeckOrderBy = {
  board_id?: InputMaybe<OrderByDirection>;
  card_number?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type Card_In_Board_Discard_DeckUpdateInput = {
  board_id?: InputMaybe<Scalars['BigInt']['input']>;
  card_number?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Card_In_Board_Discard_DeckUpdateResponse = {
  __typename?: 'card_in_board_discard_deckUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_In_Board_Discard_Deck>;
};

export type Card_In_Board_Opened = Node & {
  __typename?: 'card_in_board_opened';
  board?: Maybe<Board>;
  board_id?: Maybe<Scalars['BigInt']['output']>;
  card_number: Scalars['Int']['output'];
  card_variant: Card_Variant;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type Card_In_Board_OpenedConnection = {
  __typename?: 'card_in_board_openedConnection';
  edges: Array<Card_In_Board_OpenedEdge>;
  pageInfo: PageInfo;
};

export type Card_In_Board_OpenedDeleteResponse = {
  __typename?: 'card_in_board_openedDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_In_Board_Opened>;
};

export type Card_In_Board_OpenedEdge = {
  __typename?: 'card_in_board_openedEdge';
  cursor: Scalars['String']['output'];
  node: Card_In_Board_Opened;
};

export type Card_In_Board_OpenedFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Card_In_Board_OpenedFilter>>;
  board_id?: InputMaybe<BigIntFilter>;
  card_number?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Card_In_Board_OpenedFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Card_In_Board_OpenedFilter>>;
};

export type Card_In_Board_OpenedInsertInput = {
  board_id?: InputMaybe<Scalars['BigInt']['input']>;
  card_number?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Card_In_Board_OpenedInsertResponse = {
  __typename?: 'card_in_board_openedInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_In_Board_Opened>;
};

export type Card_In_Board_OpenedOrderBy = {
  board_id?: InputMaybe<OrderByDirection>;
  card_number?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type Card_In_Board_OpenedUpdateInput = {
  board_id?: InputMaybe<Scalars['BigInt']['input']>;
  card_number?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Card_In_Board_OpenedUpdateResponse = {
  __typename?: 'card_in_board_openedUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_In_Board_Opened>;
};

export type Card_In_Tower = Node & {
  __typename?: 'card_in_tower';
  card_number: Scalars['Int']['output'];
  card_tower: Card_Tower;
  card_tower_id: Scalars['BigInt']['output'];
  card_variant: Card_Variant;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  is_protected: Scalars['Boolean']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type Card_In_TowerConnection = {
  __typename?: 'card_in_towerConnection';
  edges: Array<Card_In_TowerEdge>;
  pageInfo: PageInfo;
};

export type Card_In_TowerDeleteResponse = {
  __typename?: 'card_in_towerDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_In_Tower>;
};

export type Card_In_TowerEdge = {
  __typename?: 'card_in_towerEdge';
  cursor: Scalars['String']['output'];
  node: Card_In_Tower;
};

export type Card_In_TowerFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Card_In_TowerFilter>>;
  card_number?: InputMaybe<IntFilter>;
  card_tower_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  is_protected?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Card_In_TowerFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Card_In_TowerFilter>>;
};

export type Card_In_TowerInsertInput = {
  card_number?: InputMaybe<Scalars['Int']['input']>;
  card_tower_id?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  is_protected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Card_In_TowerInsertResponse = {
  __typename?: 'card_in_towerInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_In_Tower>;
};

export type Card_In_TowerOrderBy = {
  card_number?: InputMaybe<OrderByDirection>;
  card_tower_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_protected?: InputMaybe<OrderByDirection>;
};

export type Card_In_TowerUpdateInput = {
  card_number?: InputMaybe<Scalars['Int']['input']>;
  card_tower_id?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  is_protected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Card_In_TowerUpdateResponse = {
  __typename?: 'card_in_towerUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_In_Tower>;
};

export type Card_Tower = Node & {
  __typename?: 'card_tower';
  board: Board;
  board_id: Scalars['BigInt']['output'];
  card_in_towerCollection?: Maybe<Card_In_TowerConnection>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user_id: Scalars['UUID']['output'];
};


export type Card_TowerCard_In_TowerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_In_TowerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_In_TowerOrderBy>>;
};

export type Card_TowerConnection = {
  __typename?: 'card_towerConnection';
  edges: Array<Card_TowerEdge>;
  pageInfo: PageInfo;
};

export type Card_TowerDeleteResponse = {
  __typename?: 'card_towerDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_Tower>;
};

export type Card_TowerEdge = {
  __typename?: 'card_towerEdge';
  cursor: Scalars['String']['output'];
  node: Card_Tower;
};

export type Card_TowerFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Card_TowerFilter>>;
  board_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Card_TowerFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Card_TowerFilter>>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Card_TowerInsertInput = {
  board_id?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Card_TowerInsertResponse = {
  __typename?: 'card_towerInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_Tower>;
};

export type Card_TowerOrderBy = {
  board_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Card_TowerUpdateInput = {
  board_id?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Card_TowerUpdateResponse = {
  __typename?: 'card_towerUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_Tower>;
};

export type Card_Variant = Node & {
  __typename?: 'card_variant';
  boardCollection?: Maybe<BoardConnection>;
  card_in_board_deckCollection?: Maybe<Card_In_Board_DeckConnection>;
  card_in_board_discard_deckCollection?: Maybe<Card_In_Board_Discard_DeckConnection>;
  card_in_board_openedCollection?: Maybe<Card_In_Board_OpenedConnection>;
  card_in_towerCollection?: Maybe<Card_In_TowerConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  number: Scalars['Int']['output'];
  power: Power;
};


export type Card_VariantBoardCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BoardFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BoardOrderBy>>;
};


export type Card_VariantCard_In_Board_DeckCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_In_Board_DeckFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_In_Board_DeckOrderBy>>;
};


export type Card_VariantCard_In_Board_Discard_DeckCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_In_Board_Discard_DeckFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_In_Board_Discard_DeckOrderBy>>;
};


export type Card_VariantCard_In_Board_OpenedCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_In_Board_OpenedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_In_Board_OpenedOrderBy>>;
};


export type Card_VariantCard_In_TowerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Card_In_TowerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Card_In_TowerOrderBy>>;
};

export type Card_VariantConnection = {
  __typename?: 'card_variantConnection';
  edges: Array<Card_VariantEdge>;
  pageInfo: PageInfo;
};

export type Card_VariantDeleteResponse = {
  __typename?: 'card_variantDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_Variant>;
};

export type Card_VariantEdge = {
  __typename?: 'card_variantEdge';
  cursor: Scalars['String']['output'];
  node: Card_Variant;
};

export type Card_VariantFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Card_VariantFilter>>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Card_VariantFilter>;
  number?: InputMaybe<IntFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Card_VariantFilter>>;
  power?: InputMaybe<PowerFilter>;
};

export type Card_VariantInsertInput = {
  power?: InputMaybe<Power>;
};

export type Card_VariantInsertResponse = {
  __typename?: 'card_variantInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_Variant>;
};

export type Card_VariantOrderBy = {
  number?: InputMaybe<OrderByDirection>;
  power?: InputMaybe<OrderByDirection>;
};

export type Card_VariantUpdateInput = {
  power?: InputMaybe<Power>;
};

export type Card_VariantUpdateResponse = {
  __typename?: 'card_variantUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Card_Variant>;
};

export type User_In_Lobby = Node & {
  __typename?: 'user_in_lobby';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user_id: Scalars['UUID']['output'];
};

export type User_In_LobbyConnection = {
  __typename?: 'user_in_lobbyConnection';
  edges: Array<User_In_LobbyEdge>;
  pageInfo: PageInfo;
};

export type User_In_LobbyDeleteResponse = {
  __typename?: 'user_in_lobbyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_In_Lobby>;
};

export type User_In_LobbyEdge = {
  __typename?: 'user_in_lobbyEdge';
  cursor: Scalars['String']['output'];
  node: User_In_Lobby;
};

export type User_In_LobbyFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<User_In_LobbyFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<User_In_LobbyFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<User_In_LobbyFilter>>;
  user_id?: InputMaybe<UuidFilter>;
};

export type User_In_LobbyInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type User_In_LobbyInsertResponse = {
  __typename?: 'user_in_lobbyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_In_Lobby>;
};

export type User_In_LobbyOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type User_In_LobbyUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type User_In_LobbyUpdateResponse = {
  __typename?: 'user_in_lobbyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_In_Lobby>;
};

export type BoardCollectionQueryVariables = Exact<{
  boardId: Scalars['BigInt']['input'];
}>;


export type BoardCollectionQuery = { __typename: 'Query', boardCollection?: { __typename: 'boardConnection', edges: Array<{ __typename: 'boardEdge', node: { __typename: 'board', id: string, pulled_card_number_to_change?: number | null, opened_card_number_to_use?: number | null, turn_user_id?: string | null, card_towerCollection?: { __typename: 'card_towerConnection', edges: Array<{ __typename: 'card_towerEdge', node: { __typename: 'card_tower', id: string, user_id: string, card_in_towerCollection?: { __typename: 'card_in_towerConnection', edges: Array<{ __typename: 'card_in_towerEdge', node: { __typename: 'card_in_tower', id: string, card_number: number, is_protected: boolean } }> } | null } }> } | null, card_in_board_deckCollection?: { __typename: 'card_in_board_deckConnection', edges: Array<{ __typename: 'card_in_board_deckEdge', node: { __typename: 'card_in_board_deck', id: string, card_number: number } }> } | null, card_in_board_openedCollection?: { __typename: 'card_in_board_openedConnection', edges: Array<{ __typename: 'card_in_board_openedEdge', node: { __typename: 'card_in_board_opened', id: string, card_number: number } }> } | null, card_in_board_discard_deckCollection?: { __typename: 'card_in_board_discard_deckConnection', edges: Array<{ __typename: 'card_in_board_discard_deckEdge', node: { __typename: 'card_in_board_discard_deck', id: string, card_number: number } }> } | null } }> } | null };

export type CardVariantsQueryVariables = Exact<{ [key: string]: never; }>;


export type CardVariantsQuery = { __typename: 'Query', card_variantCollection?: { __typename: 'card_variantConnection', edges: Array<{ __typename: 'card_variantEdge', node: { __typename: 'card_variant', power: Power, number: number } }> } | null };

export type CardTowersQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
}>;


export type CardTowersQuery = { __typename: 'Query', card_towerCollection?: { __typename: 'card_towerConnection', edges: Array<{ __typename: 'card_towerEdge', node: { __typename: 'card_tower', id: string, created_at: string, board: { __typename: 'board', id: string, turn_user_id?: string | null, created_at: string } } }> } | null };


export const BoardCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"boardCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"boardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInt"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"boardCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"boardId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pulled_card_number_to_change"}},{"kind":"Field","name":{"kind":"Name","value":"opened_card_number_to_use"}},{"kind":"Field","name":{"kind":"Name","value":"turn_user_id"}},{"kind":"Field","name":{"kind":"Name","value":"card_towerCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"card_in_towerCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"card_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_protected"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card_in_board_deckCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"card_number"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card_in_board_openedCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"card_number"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"card_in_board_discard_deckCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"card_number"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<BoardCollectionQuery, BoardCollectionQueryVariables>;
export const CardVariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cardVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"card_variantCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"power"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CardVariantsQuery, CardVariantsQueryVariables>;
export const CardTowersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cardTowers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"card_towerCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"board"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"turn_user_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CardTowersQuery, CardTowersQueryVariables>;