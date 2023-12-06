const express = require('express')
const _ = express.Router()
const authRoutes = require("./auth.js")


const productsRoutes = require("./products.js")



_.use("/auth",authRoutes)

_.use("/products",productsRoutes)


module.exports = _ ;