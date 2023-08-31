const db = require('../config/connection');
const { Creator, Brand, Campaign, Chat } = require('../models');
const cleanDB = require('./cleanDB');

const creators = require('./creators.json');
const brands = require('./brands.json');
const campaigns = require('./campaigns.json');
const chats = require('./chats.json');

db.once('open', async () => {
  await cleanDB('Creator', 'creators');
  await cleanDB('Brand', 'brands');
  await cleanDB('Campaign', 'campaigns');
  await cleanDB('Chat', 'chats')

  console.log('awaited')

  await Creator.insertMany(creators);
  await Brand.insertMany(brands);
  await Campaign.insertMany(campaigns);
  await Chat.insertMany(chats);

  console.log('seeded 🫃');
  process.exit(0);
});
