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

// Get all for creators 
export const QUERY_ALL_CAMPAIGN = gql`
  query getAllCampaignsByBrand($brand: ID!) {
    allCampaignsByBrand(brand: $brand) {
      _id
      brand
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
