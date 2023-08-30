import { gql } from '@apollo/client';

export const CREATE_CHAT = gql`
mutation createChat($brand: ID!, $creator: ID!, $chatLog: String!) {
  createChat(brand: $brand, creator: $creator, chatLog: $chatLog) {
    _id
    brand
    creator
    chatLog
  }
}
`;

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

export const CREATE_CAMPAIGN = gql`
mutation createCampaign($brand: ID!, $title: String!, $description: String!, $applyBy: String!, $postBy: String!, $requirements: String!, $deliverables: String!, $compensation: Int!, $payoutBy: String!) {
  createCampaign( brand: $brand, title: $title, description: $description, applyBy: $applyBy, postBy: $postBy, requirements: $requirements, deliverables: $deliverables, compensation: $compensation, payoutBy: $payoutBy) {
    _id
    title
    description
    applyBy
    postBy
    requirements
    deliverables
    compensation
    payoutBy
  }
}
`;
