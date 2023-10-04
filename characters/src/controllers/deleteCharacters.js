const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { _id } = req.params;
  const character = await axios.delete(`http://database:8004/Character/${_id}`);
  response(res, 201, character.data);
};
