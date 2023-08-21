const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils');

const resolvers = {
  Query: {
    currentUser: async (parent, { email }) => User.findOne({ email }),
  },

  Mutation: {
    register: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, currentUser: user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, currentUser: user };
    },
  },
};

module.exports = resolvers;
