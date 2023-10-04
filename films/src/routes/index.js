const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/:_id", controllers.getFilms);
router.post("/", controllers.postFilm);
router.delete("/:_id", controllers.deleteFilm);
router.put("/:_id", controllers.putFilm);

module.exports = router;
