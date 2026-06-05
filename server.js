const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* 🛍️ DATABASE */
let products = [
  {
    id: 1,
    name: "T-shirt",
    price: 100,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 2,
    name: "Shoes",
    price: 300,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 3,
    name: "Watch",
    price: 200,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  }
];

/* 🔥 GET PRODUCTS */
app.get("/products", (req, res) => {
  res.json(products);
});

/* 🚀 START SERVER */
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
