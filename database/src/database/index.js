const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

const Character = conn.model("Character", require("./schemas/characterSchema"));
const Films = conn.model("Films", require("./schemas/filmsSchema"));
const Planets = conn.model("Planets", require("./schemas/planetsSchema"));

// Character.find()
//   .populate("films", ["_id", "title"])
//   .populate("homeworld", ["_id", "name"])
//   .then((res) => console.log(res[0]));

// Films.find()
//   .populate("planets")
//   .then((res) => console.log(res[0]));

//Planets.find().then((res) => console.log(res[0]));

module.exports = { Character, Films, Planets };
