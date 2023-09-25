const { catchedAsync } = require("../utils");

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  postCharacters: catchedAsync(require("./postCharacters")),
  deleteCharacters: catchedAsync(require("./deleteCharacters")),
  putCharacters: catchedAsync(require("./putCharacters")),
};
