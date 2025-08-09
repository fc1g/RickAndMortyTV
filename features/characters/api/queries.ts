import { gql, TypedDocumentNode } from '@apollo/client';
import {
  GET_CAHRACTER_VARIABLES,
  GET_CHARACTER_TYPE,
  GET_CHARACTERS_TYPE,
  GET_CHARACTERS_VARIABLES,
} from './types';

export const GET_CHARACTERS: TypedDocumentNode<
  GET_CHARACTERS_TYPE,
  GET_CHARACTERS_VARIABLES
> = gql`
  query Characters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        origin {
          id
          name
          type
        }
        image
      }
      info {
        pages
      }
    }
  }
`;

export const GET_CHARACTER: TypedDocumentNode<
  GET_CHARACTER_TYPE,
  GET_CAHRACTER_VARIABLES
> = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      origin {
        id
        name
        type
      }
      image
    }
  }
`;
