const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
	const { _id } = req.params;
	const { search } = req.query;
	if (search) {
		const planets = await axios.get(
			"http://database:8004/Planets?search=" + search
		);
		response(res, 200, planets.data);
	} else if (!_id) {
		const planets = await axios.get("http://database:8004/Planets");
		response(res, 200, planets.data);
	} else {
		const planet = await axios.get(`http://database:8004/Planets/${_id}`);
		response(res, 200, planet.data);
	}
};
