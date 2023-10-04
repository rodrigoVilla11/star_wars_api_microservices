const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { _id } = req.params;
  const planets = await axios.delete(`http://database:8004/Planets/${_id}`);
  response(res, 201, planets.data);
};
