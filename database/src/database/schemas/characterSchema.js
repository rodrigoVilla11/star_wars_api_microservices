const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: "Planets" },
  films: [{ type: String, ref: "Films" }],
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (_id) {
  return await this.findById(_id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};

characterSchema.statics.delete = async function (_id) {
  return await this.findByIdAndDelete(_id);
};

characterSchema.statics.put = async function (_id, body) {
  return await this.findByIdAndUpdate(_id, {
    height: body.heigth,
    mass: body.mass,
  });
};

module.exports = characterSchema;
