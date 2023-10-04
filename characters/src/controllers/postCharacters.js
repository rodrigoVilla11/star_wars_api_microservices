const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = req.body;
  const newCharacter = await axios.post("http://database:8004/Character", {
    name: name,
    height: height,
    mass: mass,
    hair_color: hair_color,
    skin_color: skin_color,
    eye_color: eye_color,
    birth_year: birth_year,
    gender: gender,
  });
  response(res, 201, newCharacter.data);
};
