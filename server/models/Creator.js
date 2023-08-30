/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const creatorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  audience: {
    type: Number,
    // required: true,
  },
  platforms: {
    instagram: { type: Boolean, default: false },
    youtube: { type: Boolean, default: false },
    facebook: { type: Boolean, default: false },
    tiktok: { type: Boolean, default: false},
    snapchat: { type: Boolean, default: false}
  },

});

creatorSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});



creatorSchema.pre("insertMany", async (next, docs) => {
  if (Array.isArray(docs) && docs.length) {
    const hashedCreators = docs.map(
      async (creator) =>
        new Promise((resolve, reject) => {
          bcrypt
            .genSalt(10)
            .then((salt) => {
              const password = creator.password.toString();
              return bcrypt
                .hash(password, salt)
                .then((hash) => {
                  creator.password = hash;
                  resolve();
                })
                .catch((e) => {
                  reject(e);
                });
            })
            .catch((e) => {
              reject(e);
            });
        })
    );
    docs = await Promise.all(hashedCreators);
    return next();
  }
  return next(new Error("User list should not be empty")); // lookup early return pattern
});




creatorSchema.methods.isCorrectPassword = async function (password) {
  console.log(password)
  console.log(this.password)
  return bcrypt.compare(password, this.password);
};

const Creator = model('Creator', creatorSchema);

module.exports = Creator;
