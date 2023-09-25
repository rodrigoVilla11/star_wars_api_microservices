const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getCharacters);
router.post("/", middlewares.characterValidation, controllers.postCharacters);
router.delete("/", controllers.deleteCharacters);
router.put("/", controllers.putCharacters);

module.exports = router;
