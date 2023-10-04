const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { _id } = req.params;
  const { title, opening_crawl } = req.body;
  const updatedFilm = await axios.put(`http://database:8004/Films/${_id}`, {
    title: title,
    opening_crawl: opening_crawl,
  });
  response(res, 201, updatedFilm.data);
};
