const router = require("express").Router();
const Movie = require("../controllerMovie");

//  Scrapes movie information
router.route("/scrape/:imdb")
  .get(Movie.scrape);

//  Gets list of searched movies
router.route("/search")
  .post(Movie.search);

module.exports = router;
