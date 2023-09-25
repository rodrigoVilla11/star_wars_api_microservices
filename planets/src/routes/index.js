const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getPlanets);
router.post("/", middlewares.planetValidation, controllers.postPlanets);
router.delete("/", controllers.deletePlanets);
router.put("/", controllers.putPlanets);

module.exports = router;
