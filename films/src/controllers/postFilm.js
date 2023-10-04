const { response } = require("../utils");
const Films = require("../data");
const { default: axios } = require("axios");

module.exports = async (req, res) => {
  const { _id, title, opening_crawl, director, producer, release_date } =
    req.body;
  const newFilm = await axios.post("http://database:8004/Films", {
    _id: _id,
    title: title,
    opening_crawl: opening_crawl,
    director: director,
    producer: producer,
    release_date: release_date,
  });
  response(res, 201, newFilm.data);
};
