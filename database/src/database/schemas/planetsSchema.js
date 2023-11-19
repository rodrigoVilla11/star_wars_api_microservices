const { Schema } = require("mongoose");

const planetsSchema = new Schema({
	_id: String,
	name: String,
	rotation_period: String,
	orbital_period: String,
	diameter: String,
	climate: String,
	gravity: String,
	terrain: String,
	surface_water: String,
	residents: [{ type: String, ref: "Character" }],
	films: [{ type: String, ref: "Films" }],
});

planetsSchema.statics.list = async function (search) {
	if (search) {
		return await this.find({ name: { $regex: search, $options: "i" } })
			.populate("residents", ["_id", "name"])
			.populate("films", ["_id", "title"]);
	} else {
		return await this.find()
			.populate("residents", ["_id", "name"])
			.populate("films", ["_id", "title"]);
	}
};
planetsSchema.statics.get = async function (_id) {
	return await this.findById(_id)
		.populate("residents", ["_id", "name"])

		.populate("films", ["_id", "title"]);
};

planetsSchema.statics.insert = async function (planet) {
	return await this.create(planet);
};
planetsSchema.statics.delete = async function (_id) {
	return await this.findByIdAndDelete(_id);
};
planetsSchema.statics.put = async function (_id, body) {
	return await this.findByIdAndUpdate(_id, {
		name: body.name,
		residents: body.residents,
	});
};

module.exports = planetsSchema;
