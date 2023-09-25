const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getFilms);
router.post("/", middlewares.filmValidation, controllers.postFilm);
router.delete("/", controllers.deleteFilm);
router.put("/", controllers.putFilm);

module.exports = router;
