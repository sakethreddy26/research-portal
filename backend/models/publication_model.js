const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({});

module.exports = mongoose.model(
  "publication",
  publicationSchema,
  "publication"
);
