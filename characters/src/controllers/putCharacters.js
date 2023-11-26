const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
	const { _id } = req.params;
	const { height, mass } = req.body;
	const updatedCharacter = await axios.put(
		`http://database:8004/Character/${_id}`,
		{ height: height, mass: mass }
	);
	response(res, 201, updatedCharacter.data);
};
