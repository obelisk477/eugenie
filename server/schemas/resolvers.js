const { Creator, Chat, Brand, Campaign } = require('../models');
const { signToken, AuthenticationError } = require('../utils');

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
      const token = signToken(creator);
      return { token, currentCreator: creator };
    },

    registerBrand: async (parent, { brandName, email, password }) => {
      const brand = await Brand.create({ brandName, email, password });
      const token = signToken(brand);
      console.log(token, brand)
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
    createCampaign: async (parent, { brand, title, description, applyBy, postBy, requirements, deliverables, compensation, payoutBy }) => {
      console.log(brand, title, description, applyBy, postBy, requirements, deliverables, compensation, payoutBy, ">>>>>>")
      const createCampaign = await Campaign.create({ brand, title, description, applyBy, postBy, requirements, deliverables, compensation, payoutBy })
      return createCampaign
    },
    // getAllCampaignsByBrand: async (parent) => {
    //   const allCampaignsByBrand = await Campaign.find()
    //   return allCampaignsByBrand
    // },
  },
};

module.exports = resolvers;
