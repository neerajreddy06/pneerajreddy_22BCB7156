const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  {
    title: "Men's T-Shirt",
    brand: "Nike",
    category: "Men",
    price: 1299,
    image: "https://via.placeholder.com/200x180.png?text=Men+T-Shirt",
  },
  {
    title: "Women's Jacket",
    brand: "Zara",
    category: "Women",
    price: 2999,
    image: "https://via.placeholder.com/200x180.png?text=Women+Jacket",
  },
  {
    title: "Kids Hoodie",
    brand: "Adidas",
    category: "Kids",
    price: 999,
    image: "https://via.placeholder.com/200x180.png?text=Kids+Hoodie",
  },
];

Product.insertMany(products)
  .then(() => {
    console.log("Sample products inserted");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Insert failed", err);
  });
