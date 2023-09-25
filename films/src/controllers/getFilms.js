const axios = require("axios");

const { response } = require("../utils");

module.exports = async (req, res) => {
  const films = await axios.get("http://database:8004/Films");
  response(res, 200, films.data);
};
