const { response } = require("../utils");
const Films = require("../data");

module.exports = async (req, res) => {
  const newFilm = await Films.create();
  response(res, 201, newFilm);
};
