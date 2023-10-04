const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { _id } = req.params;
  if (!_id) {
    const planets = await axios.get("http://database:8004/Planets");
    response(res, 200, planets.data);
  } else {
    const planet = await axios.get(`http://database:8004/Planets/${_id}`);
    response(res, 200, planet.data);
  }
};
