const express = require('express');
const login = require("../../controllers/login")


const _ = express.Router()



_.post("/login",login)



module.exports = _ ;