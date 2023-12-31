const { catchedAsync } = require("../utils");

module.exports = {
  getFilms: catchedAsync(require("./getFilms")),
  postFilm: catchedAsync(require("./postFilm")),
  deleteFilm: catchedAsync(require("./deleteFilm")),
  putFilm: catchedAsync(require("./putFilms")),
};
