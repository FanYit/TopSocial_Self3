const express = require("express");
const routerCards = express.Router();

const {
  getCardById,
  deleteCardById,
  postCard,
} = require("../controller/cardController");

routerCards.get("/", getCardById);
routerCards.delete("/:idDelete", deleteCardById);
routerCards.post("/", postCard);

module.exports = routerCards;
