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

// Get all campaigns for brands
export const QUERY_ALL_BRAND_CAMPAIGNS = gql`
  query getAllCampaignsByBrand($brand: ID!) {
    getAllCampaignsByBrand(brand: $brand) {
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

// Get all campaigns for creator
export const QUERY_ALL_CAMPAIGNS = gql`
  query getAllCampaigns {
    getAllCampaigns {
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

