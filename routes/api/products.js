const express = require("express");
const {
  createproduct,
  allproducts,
  deleteProducts,
} = require("../../controllers/prodectControllers");
const _ = express.Router();

_.post("/createproducts", createproduct);

_.get("/allproducts", allproducts);

_.post("/deleteproducts", deleteProducts);
module.exports = _;
