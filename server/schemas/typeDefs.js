const typeDefs = `#graphql
  type Creator {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
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

  type Query {
    currentCreator(email: String!): Creator
    currentBrand(email: String!): Brand
    getChat(brand: ID!, creator: ID!): Chat
  }

  type Mutation {
    createChat(brand: ID!, creator: ID!, chatLog: String!): Chat
    registerCreator(firstName: String!, lastName: String!, email: String!, password: String!): creatorAuth
    loginCreator(email: String!, password: String!): creatorAuth
    registerBrand(brandName: String!, email: String!, password: String!): brandAuth
    loginBrand(email: String!, password: String!): brandAuth
  }
`;

module.exports = typeDefs;
