const db = require('../config/connection');
const { Creator, Brand, Campaign } = require('../models');
const cleanDB = require('./cleanDB');

const creators = require('./creators.json');
const brands = require('./brands.json');
const campaigns = require('./campaigns.json');

db.once('open', async () => {
  await cleanDB('Creator', 'creators');
  await cleanDB('Brand', 'brands');
  await cleanDB('Campaign', 'campaign');

  await Creator.insertMany(creators);
  await Brand.insertMany(brands);
  await Campaign.insertMany(campaigns);

  console.log('seeded 🫃');
  process.exit(0);
});
