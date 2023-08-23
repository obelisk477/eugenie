const { Creator } = require('../models');
const { signToken, AuthenticationError } = require('../utils');

const resolvers = {
  Query: {
    currentCreator: async (parent, { email }) => Creator.findOne({ email }),
  },

  Mutation: {
    register: async (parent, { firstName, lastName, email, password }) => {
      const creator = await Creator.create({ firstName, lastName, email, password });
      const token = signToken(creator);
      return { token, currentCreator: creator };
    },
    login: async (parent, { email, password }) => {
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
  },
};

module.exports = resolvers;
