const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const { body } = req.body;

  const newCharacter = await axios.post("http://database:8004/Character", body);
  response(res, 201, newCharacter);
};
