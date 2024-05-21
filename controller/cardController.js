const axios = require("axios");

const URL = `http://localhost:8000/cards`;

const getCardById = async (req, res, next) => {
  console.log("getCardById activated");
  const id = req.query.id;
  console.log("id is: ", id);

  if (!id) {
    return res.status(400).json({
      msg: "id is required",
    });
  }

  try {
    const response = await axios.get(`${URL}?id=${id}`);
    const card = response.data;
    console.log("type of card is array", Array.isArray(card));

    if (card.length === 0) {
      res.status(400).json({
        msg: "id doesn't exist",
      });
    }

    res.status(200).json({
      msg: "getCardById succeed",
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCardById = async (req, res, next) => {
  console.log("deleteCardById activated");
  const id = req.params.idDelete;

  if (!id) {
    return res.status(400).json({
      msg: "id required",
    });
  }

  try {
    const response = await axios.delete(`${URL}/${id}`);
    res.status(200).json({
      msg: "delete succeed",
    });
  } catch (error) {
    next(error);
  }
};

const postCard = async (req, res, next) => {
  console.log("postCard activated");

  const card = req.body;
  const response = await axios.post(`${URL}`, card);
  res.status(200).json({
    msg: "postCard succeed",
    data: response.data,
  });
};

module.exports = { getCardById, deleteCardById, postCard };
