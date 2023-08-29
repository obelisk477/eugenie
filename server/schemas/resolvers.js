const { Creator, Chat, Brand, Campaign } = require('../models');
const { signBrandToken, signCreatorToken, AuthenticationError } = require('../utils');

const resolvers = {
  Query: {
    currentCreator: async (parent, { email }) => Creator.findOne({ email }),
    currentBrand: async (parent, { email }) => Brand.findOne({ email }),
    getChat: async (parent, {brand, creator}) => Chat.findOne({ brand, creator }),
    getAllCampaignsByBrand: async (parent, { brand }) => Campaign.findOne({ brand })
  },

  Mutation: {
    createChat: async (parent, { brand, creator, chatLog }) => {
      console.log(`>>>>>>>>>>> ${brand}`)
      const chat = await Chat.create({brand, creator, chatLog})
      return chat
      
    },

    registerCreator: async (parent, { firstName, lastName, email, password }) => {
      const creator = await Creator.create({ firstName, lastName, email, password });
      const token = signCreatorToken(creator);
      return { token, currentCreator: creator };
    },

    registerBrand: async (parent, { brandName, email, password }) => {
      const brand = await Brand.create({ brandName, email, password });
      const token = signBrandToken(brand);
      console.log(token, brand)
      return { token, currentBrand: brand };
    },

    loginCreator: async (parent, { email, password }) => {
      const creator = await Creator.findOne({ email });

      if (!creator) {
        throw AuthenticationError;
      }

      console.log(creator)
      const correctPw = await creator.isCorrectPassword(password);
      console.log()
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signCreatorToken(creator);

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

      // const brandUser = {...brand, isBrand: true }
      const token = signBrandToken(brand);

      return { token, currentBrand: brand };
    },
    createCampaign: async (parent, args) => {
      const createCampaign = await Campaign.create(args)
      return createCampaign
    },

  },
};

module.exports = resolvers;
