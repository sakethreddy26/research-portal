const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: [String],
    required: true,
  },
  campus: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  domains: {
    type: [String],
    default: [],
  },
  responsibilities: {
    type: [String],
    default: [],
  },
  education: {
    type: [String],
    default: [],
  },
  experience: {
    type: [String],
    default: [],
  },
});

const Professor = mongoose.model('professor', professorSchema);

module.exports = Professor;
