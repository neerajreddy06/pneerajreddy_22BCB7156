// server/models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  gender: String,
  price: Number,
  sizes: [String],
  image: String
});

module.exports = mongoose.model('Product', productSchema);
