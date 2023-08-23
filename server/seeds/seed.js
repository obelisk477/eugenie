const db = require('../config/connection');
const { Creator } = require('../models');
const cleanDB = require('./cleanDB');

const creators = require('./creators.json');

db.once('open', async () => {
  await cleanDB('Creator', 'creators');

  await Creator.insertMany(creators);

  console.log('Creators seeded!');
  process.exit(0);
});
