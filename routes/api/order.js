const express = require("express");
const { createOrder } = require("../../controllers/orderController");

const _ = express.Router();


_.post("/createorder", createOrder);
module.exports = _;