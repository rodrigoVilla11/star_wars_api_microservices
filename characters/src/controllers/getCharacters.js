const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
	const { _id } = req.params;
	if (!_id) {
		const characters = await axios.get("http://localhost:8004/Character");
		response(res, 200, characters.data);
	} else {
		const characters = await axios.get(
			`http://localhost:8004/Character/${_id}`
		);
		response(res, 200, characters.data);
	}
};
