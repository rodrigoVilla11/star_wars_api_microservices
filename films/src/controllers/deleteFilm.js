const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const { _id } = req.params;
  const film = await axios.delete(`http://database:8004/Films/${_id}`);
  response(res, 201, film.data);
};
