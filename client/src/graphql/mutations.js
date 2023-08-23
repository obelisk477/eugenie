import { gql } from '@apollo/client';

export const LOGIN_CREATOR = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    currentCreator {
      email
      firstName
      lastName
      _id
    }
    token
  }
}
`;

export const REGISTER_CREATOR = gql`
mutation register($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  register(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    currentCreator {
      firstName
      lastName
    }
    token
  }
}
`;
