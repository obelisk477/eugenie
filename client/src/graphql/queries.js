import { gql } from "@apollo/client";

export const QUERY_CURRENT_CREATOR = gql`
  query getCurrentCreator($email: String!) {
    currentCreator(email: $email) {
      _id
      email
      firstName
      lastName
      creativeLibrary
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
  query getChat( $creator: ID!) {
    getChat(brand: $brand, creator: $creator) {
      _id
      brand {
        _id
        brandName
      }
      creator {
        _id
        firstName
      }
      chatLog
    }
  }
`;

export const QUERY_ALL_CHATS = gql`
  query getAllChats {
    getAllChats {
      _id
      brand {
      _id
      brandName
      }
      creator {
      _id
      firstName
      }
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
      applicants {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_CREATORS = gql`
  query getCreators {
    creators {
      _id
      firstName
      lastName
      email
      audience
      platforms
    }
  }
`;

export const QUERY_BRANDS = gql`
  query getAllBrands {
    _id
    brandName
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
      accepted {
        _id
        firstName
        lastName
      }
    }
  }
`;
