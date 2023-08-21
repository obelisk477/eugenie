const db = require('../config/connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

const users = require('./users.json');

db.once('open', async () => {
  await cleanDB('User', 'users');

  await User.insertMany(users);

  console.log('Users seeded!');
  process.exit(0);
});
