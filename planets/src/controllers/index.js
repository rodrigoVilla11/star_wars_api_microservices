const { catchedAsync } = require("../utils");

module.exports = {
  getPlanets: catchedAsync(require("./getPlanets")),
  postPlanets: catchedAsync(require("./postPlanets")),
  deletePlanets: catchedAsync(require("./deletePlanets")),
  putPlanets: catchedAsync(require("./putPlanets")),
};
