const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/beforeyouwatch", { useNewUrlParser: true });

// Add routes for API and for database.
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
