/* eslint-disable func-names */
const { Schema, model } = require('mongoose');


const campaignSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unqique: true
      },
});

const Campaign = model('Campaign', campaignSchema);

module.exports = Campaign;
