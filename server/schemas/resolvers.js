const { Creator } = require('../models');
const { Brand } = require('../models');
const { signToken, AuthenticationError } = require('../utils');

const resolvers = {
  Query: {
    currentCreator: async (parent, { email }) => Creator.findOne({ email }),
    currentBrand: async (parent, { email }) => Brand.findOne({ email }),
  },

  Mutation: {
    registerCreator: async (parent, { firstName, lastName, email, password }) => {
      const creator = await Creator.create({ firstName, lastName, email, password });
      const token = signToken(creator);
      return { token, currentCreator: creator };
    },

    registerBrand: async (parent, { brandName, email, password }) => {
      const brand = await Brand.create({ brandName, email, password });
      const token = signToken(brand);
      return { token, currentBrand: brand };
    },

    loginCreator: async (parent, { email, password }) => {
      const creator = await Creator.findOne({ email });

      if (!creator) {
        throw AuthenticationError;
      }

      const correctPw = await creator.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(creator);

      return { token, currentCreator: creator };
    },

    loginBrand: async (parent, { email, password }) => {
      const brand = await Brand.findOne({ email });

      if (!brand) {
        throw AuthenticationError;
      }

      const correctPw = await brand.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(brand);

      return { token, currentBrand: brand };
    },
  },
};

module.exports = resolvers;
