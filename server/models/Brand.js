/* eslint-disable func-names */
/* eslint-disable no-param-reassign */

const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const brandSchema = new Schema({
  brandName: {
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
});

brandSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});


brandSchema.pre("insertMany", async (next, docs) => {
  if (Array.isArray(docs) && docs.length) {
    const hashedBrands = docs.map(
      async (brand) =>
        new Promise((resolve, reject) => {
          bcrypt
            .genSalt(10)
            .then((salt) => {
              const password = brand.password.toString();
              return bcrypt
                .hash(password, salt)
                .then((hash) => {
                  brand.password = hash;
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
    docs = await Promise.all(hashedBrands);
    return next();
  }
  return next(new Error("User list should not be empty")); // lookup early return pattern
});



brandSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Brand = model('Brand', brandSchema);

module.exports = Brand;
