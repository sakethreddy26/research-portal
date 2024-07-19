const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type:String,
    required:true
  },
  designation: {
    type: [String], 
    default: []
  },
  education: {
    type: [String], 
    default: []
  },
  department: {
    type: String,
    required: true
  },
  campus: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  responsibilities: {
    type: [String],
    default: []
  }
});

module.exports = mongoose.model('professor', professorSchema, 'professor');
