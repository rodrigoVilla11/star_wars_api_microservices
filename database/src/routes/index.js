const { Router } = require("express");
const store = require("../database");
const { validateModel } = require("../middlewares");

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
	const { model } = req.params;
	const { search } = req.query;
	console.log(req.query);
	if (!search) {
		const response = await store[model].list();
		res.status(200).json(response);
	} else {
		const response = await store[model].list(search);
		res.status(200).json(response);
	}
});

router.get("/:model/:_id", validateModel, async (req, res) => {
	const { model, _id } = req.params;
	const response = await store[model].get(_id);
	res.status(200).json(response);
});
router.post("/:model", async (req, res) => {
	const { model } = req.params;
	const body = req.body;
	const response = await store[model].insert(body);
	res
		.status(200)
		.json({ message: `${model} created succesfully`, data: response });
});
router.delete("/:model/:_id", async (req, res) => {
	const { model, _id } = req.params;
	const response = await store[model].delete(_id);
	res
		.status(200)
		.json({ message: `${model} deleted succesfully`, data: response });
});
router.put("/:model/:_id", async (req, res) => {
	const { model, _id } = req.params;
	const body = req.body;
	const response = await store[model].put(_id, body);
	res.status(200).json(response);
});
module.exports = router;
