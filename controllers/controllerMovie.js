const axios = require("axios");
const db = require("../models");
const keys = require("../keys");

const OMDB_URL = "http://www.omdbapi.com/?apikey=" + keys.omdb + "&";

module.exports = {
  //  Finds all movies with a certain parameter.
  find: (req, res) => {
    db.Movie
      .find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(442).json(err));
  },

  //  Finds a movie with an IMDb id.
  findId: (req, res) => {
    db.Movie
      .find({imdb: req.params.imdb})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(442).json(err));
  },

  //  Adds a movie to the database.
  create: (req, res) => {
    db.Movie
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(442).json(err));
  },

  //  Updates a movie in the database.
  update: (req, res) => {
    db.Movie
      .findOneAndUpdate({imdb: req.params.imdb}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(442).json(err));
  },

  //  Removes a movie from the database.
  remove: (req, res) => {
    db.Movie
      .findOneAndDelete({imdb: req.params.imdb}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(442).json(err));
  },

  //  Scrapes the movie information
  scrape: (req, res) => {
    console.log("Scraping...");
    axios.get(OMDB_URL + "i=" + req.params.imdb)
      .then(movie => {
        console.log(movie.data);
        res.status(200).json(movie.data);
      })
      .catch(err => console.log(err));
  },

  //  Gathers a list of movies
  search: (req, res) => {
    console.log(req.body);
    axios.get(OMDB_URL + "s=" + req.body.title)
      .then(movies => {
        console.log(movies.data);
        res.status(200).json(movies.data.Search);
      })
      .catch(err => console.log(err));
  }
}