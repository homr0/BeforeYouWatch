const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  imdb: {
    type: String,
    required: true,
    unique: true
  },

  title: {
    type: String,
    required: true
  },

  year: {
    type: Number,
    required: true
  },

  image: {
    type: String,
  },

  watchNeed: [{
    type: String
  }],

  watchShould: [{
    type: String
  }]
});

module.exports = mongoose.model("Movie", MovieSchema);