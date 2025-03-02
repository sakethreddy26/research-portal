const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  Name: String,
  "Profile Image": String,
  Expertise: String,
  Experience: String,
  Qualification: String,
  "Academic IDs": {
    "Orcid Id": String,
    "Scopus Id": String,
    "Google Scholar Id": String
  },
  "Total Papers": Number,
  "Research Papers": [{
    Title: String,
    Authors: String,
    Type: String,
    Year: String,
    DOI: String,
    Citations: String
  }],
  "Citations & Indices": {
    CITATIONS: Number,
    "H-INDEX": Number
  },
  "Google Scholar": mongoose.Schema.Types.Mixed,
  Campus: String,
  Department: String
});

module.exports = mongoose.model('Professor_irins', professorSchema); 