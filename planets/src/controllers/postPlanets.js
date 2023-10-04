const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const {
    _id,
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
  } = req.body;
  const newPlanet = await axios.post("http://database:8004/Planets", {
    _id: _id,
    name: name,
    rotation_period: rotation_period,
    orbital_period: orbital_period,
    diameter: diameter,
    climate: climate,
    gravity: gravity,
    terrain: terrain,
    surface_water: surface_water,
  });
  response(res, 201, newPlanet.data);
};
