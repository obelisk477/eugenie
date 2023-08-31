const moment = require('moment');
const mongoose = require("mongoose");

const { Creator, Chat, Brand, Campaign } = require('../models');
const { signBrandToken, signCreatorToken, AuthenticationError } = require('../utils');


/* eslint-disable object-shorthand */

const resolvers = {
  Query: {
    currentCreator: async (parent, { email }) => Creator.findOne({ email }),
    currentBrand: async (parent, { email }) => Brand.findOne({ email }),
    getChat: async (parent, {brand, creator}) => Chat.findOne({ brand, creator }).populate('brand'),
    getAllChats: async (parent, {brand}) => {
      const chats = await Chat.find(brand).populate('brand').populate('creator')
      return chats 
    },
    getCreators: async () => { 
      const creators = await Creator.find()
      return creators 
    },
    getAllBrands: async () => {
      const brands = await Brand.find()
      return brands
    },
    getAudienceByCreator: async (parent, { creatorId }) => {
        const creator = await Creator.findById(creatorId);
        if (!creator) {
          throw new Error('Creator not found')
        }
        return creator.audience
  },
    getAllCampaigns: async () => {
      const today = moment().startOf('day');
      const campaigns = await Campaign.find({ applyBy: {$gt: today }})
      return campaigns;
    },
    getAllCampaignsByBrand: async (parent, { brand }) => Campaign.find({ brand }).populate('applicants')      
  
  },

  Mutation: {
    createChat: async (parent, { brand, creator, chatLog }) => {
      console.log(`>>>>>>>>>>> ${brand}`)
      const chat = await Chat.create({brand, creator, chatLog})
      return chat
      
    },

    registerCreator: async (parent, { firstName, lastName, email, password, audience, platforms }) => {
      const creator = await Creator.create({ firstName, lastName, email, password, audience, platforms });
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
    applyToCampaign: async (parent, {_id, applicants}) => {
      const applyToCampaign = await Campaign.findOneAndUpdate(
        { _id: _id },
        {$addToSet: { applicants: applicants }},
        {new: true}
      )
      return applyToCampaign
    },

    deleteCampaign: async (parent, {_id} ) => {
     const deleteCampaign = await Campaign.findOneAndDelete({_id: new mongoose.Types.ObjectId(_id)})
     return deleteCampaign
    },
    addToAccepted: async (parent, {_id, accepted}) => {
      const addToAccepted = await Campaign.findOneAndUpdate(
        { _id: _id },
        {$addToSet: { accepted: accepted }},
        {new: true}
      )
      console.log(accepted)
      return addToAccepted
    },
    addCreative: async (parent, {_id, creativeLibrary}) => {
      const addToAccepted = await Creator.findOneAndUpdate(
        { _id: _id },
        { $addToSet: { creativeLibrary: creativeLibrary }},
        { new: true}
      )
      return addToAccepted
    },
      

  },
};

module.exports = resolvers;
