import { gql } from '@apollo/client';

export const QUERY_CURRENT_CREATOR = gql`
  query getCurrentCreator($email: String!) {
    currentCreator(email: $email) {
      _id
      email
      firstName
      lastName
    }
  }
`;

export const QUERY_CURRENT_BRAND = gql`
  query getCurrentBrand($email: String!) {
    currentBrand(email: $email) {
      _id
      brandName
      email
    }
  }
`;

export const QUERY_CURRENT_CHAT = gql`
  query getChat($brand: ID!, $creator: ID!) {
    getChat(brand: $brand, creator: $creator) {
      _id
      brand
      creator
      chatLog
    }
  }
`;

export const QUERY_CURRENT_CAMPAIGN = gql`
  query getCampaign($brand: ID!) {
    getCampaign(brand: $brand) {
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
