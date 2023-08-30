const typeDefs = `#graphql
  type Creator {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    audience: Int
    platforms: Platforms

  }
  type Platforms {  # Define a new type for platforms
    instagram: Boolean
    youtube: Boolean
    facebook: Boolean
    tiktok: Boolean
    snapchat: Boolean
  }

  input PlatformsInput { 
    instagram: Boolean
    youtube: Boolean
    facebook: Boolean
    tiktok: Boolean
    snapchat: Boolean
  }

  type Brand {
    _id: ID
    brandName: String
    email: String
    password: String
  }

  type Chat {
    _id: ID
    brand: ID
    creator: ID
    chatLog: String
  }

  type creatorAuth {
    token: ID!
    currentCreator: Creator
  }

  type brandAuth {
    token: ID!
    currentBrand: Brand
  }
  type Campaign {
    _id: ID!
    brand: ID!
    title: String!
    description: String!
    applyBy: String!
    postBy: String!
    requirements: String!
    deliverables: String!
    compensation: Int!
    payoutBy: String!
}


  type Query {
    currentCreator(email: String!): Creator
    currentBrand(email: String!): Brand
    getChat(brand: ID!, creator: ID!): Chat
    getAllCampaignsByBrand(brand: ID!): Campaign
    getCreators: [Creator]!
    getAudienceByCreator(creatorId: ID!) : Int!
  }

  type Mutation {
    createChat(brand: ID!, creator: ID!, chatLog: String!): Chat
    registerCreator(firstName: String!, lastName: String!, email: String!, password: String!, audience: Int!, platforms: PlatformsInput!): creatorAuth
    loginCreator(email: String!, password: String!): creatorAuth
    registerBrand(brandName: String!, email: String!, password: String!): brandAuth
    loginBrand(email: String!, password: String!): brandAuth
    createCampaign(brand: ID!, title: String!, description: String!, applyBy: String!, postBy: String!, requirements: String!, deliverables: String!, compensation: Int!, payoutBy: String!): Campaign
  }
`;

module.exports = typeDefs;
