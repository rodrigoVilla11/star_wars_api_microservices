const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { _id } = req.params;
  const { name, residents } = req.body;
  const updatedPlanet = await axios.put(`http://database:8004/Planets/${_id}`, {
    name: name,
    residents: residents,
  });
  response(res, 201, updatedPlanet.data);
};
