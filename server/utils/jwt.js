const jwt = require('jsonwebtoken');

const { secret, expiration } = require('./constants');

module.exports = {
  signBrandToken ({ email, brandName, _id }) {
    const payload = { email, brandName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  signCreatorToken ({ email, firstName, lastName, _id }) {
    const payload = { email, firstName, lastName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};