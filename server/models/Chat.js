/* eslint-disable func-names */
const { Schema, model } = require('mongoose');


const chatSchema = new Schema({
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
      },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'Creator'
      },
    chatLog: {
        type: String,
        required: true,
      }
});

const Chat = model('Chat', chatSchema);

module.exports = Chat;
