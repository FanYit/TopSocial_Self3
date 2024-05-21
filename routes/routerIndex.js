const express = require("express");
const routerIndex = express.Router();

const routerCards = require("./cards");
routerIndex.use("/cards", routerCards);

module.exports = routerIndex;
