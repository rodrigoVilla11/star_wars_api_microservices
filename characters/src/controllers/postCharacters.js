const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
	const {
		name,
		height,
		mass,
		hair_color,
		skin_color,
		eye_color,
		birth_year,
		gender,
		homeworld,
		films,
	} = req.body;

	try {
		const newCharacter = await axios.post("http://localhost:8004/Character", {
			_id: Math.random(),
			name: name,
			height: height,
			mass: mass,
			hair_color: hair_color,
			skin_color: skin_color,
			eye_color: eye_color,
			birth_year: birth_year,
			gender: gender,
			homeworld: homeworld,
			films: films,
		});
		console.log(newCharacter.data);

		response(res, 201, newCharacter.data);
	} catch (error) {
		response(res, 500, error);
	}
};
