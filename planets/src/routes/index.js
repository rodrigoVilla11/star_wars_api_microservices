const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/:_id", controllers.getPlanets);
router.get("/", controllers.getPlanets);

router.post("/", controllers.postPlanets);
router.delete("/:_id", controllers.deletePlanets);
router.put("/:_id", controllers.putPlanets);

module.exports = router;
