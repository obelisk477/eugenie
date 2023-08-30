/* eslint-disable func-names */
const { Schema, model } = require('mongoose');
const moment = require('moment');


const campaignSchema = new Schema(
  {
    brand: {
      type: Schema.Types.ObjectId,
      ref: 'Brand'
    },
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
    description: {
      type: String,
      required: true,
      maxlength: 280,
    },
    applyBy: {
      type: Date,
      get: (applyByVal) => moment(applyByVal).format('MMM DD, YYYY'),
      required: true,
    },
    postBy: {
      type: Date,
      get: (postByVal) => moment(postByVal).format('MMM DD, YYYY'),
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    deliverables: {
      type: String,
      required: true,
    },
    compensation: {
      type: Number,
      required: true,
    },
    applicants: [{
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Creator'
    }],
    payoutBy: {
      type: Date,
      get: (payoutByVal) => moment(payoutByVal).format('MMM DD, YYYY'),
      required: true,
      validate: {
        validator(payoutDate) { 
          const payoutBy = moment(this.postBy).add(2, 'weeks');
          return moment(payoutDate).isSameOrBefore(payoutBy);
        },
      },
    },
  },
  {
    toJSON: {
        getters: true
    },
  }
);

const Campaign = model('Campaign', campaignSchema);

module.exports = Campaign;
