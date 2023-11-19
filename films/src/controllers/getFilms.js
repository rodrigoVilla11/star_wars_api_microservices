const axios = require("axios");

const { response } = require("../utils");

module.exports = async (req, res) => {
	const { _id } = req.params;
	const { search } = req.query;
	if (search) {
		const films = await axios.get(
			"http://localhost:8004/Films?search=" + search
		);
		response(res, 200, films.data);
	} else if (!_id) {
		const films = await axios.get("http://localhost:8004/Films");
		response(res, 200, films.data);
	} else {
		const film = await axios.get(`http://localhost:8004/Films/${_id}`);
		response(res, 200, film.data);
	}
};
