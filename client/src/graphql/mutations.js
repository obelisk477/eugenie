import { gql } from '@apollo/client';

export const LOGIN_CREATOR = gql`
mutation loginCreator($email: String!, $password: String!) {
  loginCreator(email: $email, password: $password) {
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
export const LOGIN_BRAND = gql`
mutation loginBrand($email: String!, $password: String!) {
  loginBrand(email: $email, password: $password) {
    currentBrand {
      email
      brandName
      _id
    }
    token
  }
}
`;

export const REGISTER_CREATOR = gql`
mutation registerCreator($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  registerCreator(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    currentCreator {
      firstName
      lastName
    }
    token
  }
}
`;

export const REGISTER_BRAND = gql`
mutation registerBrand($brandName: String!, $email: String!, $password: String!) {
  registerBrand(brandName: $brandName, email: $email, password: $password) {
    currentBrand {
      brandName
    }
    token
  }
}
`;
