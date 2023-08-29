const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
  const modelExists = await models[modelName].db.db
    .listCollections({ name: collectionName }).toArray()

    if (modelExists.length) {
      console.log(collectionName)
      const dropped = await db.dropCollection(collectionName);
      console.log(dropped)
    }
}
