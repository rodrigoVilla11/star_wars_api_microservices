const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/:_id", controllers.getCharacters);
router.post("/", middlewares.characterValidation, controllers.postCharacters);
router.delete("/:_id", controllers.deleteCharacters);
router.put("/:_id", controllers.putCharacters);

module.exports = router;
