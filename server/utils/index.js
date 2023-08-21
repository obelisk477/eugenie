const { GraphQLError } = require('./error');
const { signToken } = require('./jwt');

module.exports = {
  GraphQLError,
  signToken
}