const axios = require("axios");

const { response } = require("../utils");

module.exports = async (req, res) => {
  const { _id } = req.params;
  if (!_id) {
    const films = await axios.get("http://database:8004/Films");
    response(res, 200, films.data);
  } else {
    const film = await axios.get(`http://database:8004/Films/${_id}`);
    response(res, 200, film.data);
  }
};
