const { Schema } = require("mongoose");

const filmsSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planets" }],
});

filmsSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};
filmsSchema.statics.get = async function (_id) {
  return await this.findById(_id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmsSchema.statics.insert = async function (film) {
  return await this.create(film);
};

module.exports = filmsSchema;
