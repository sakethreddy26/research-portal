const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema()
  



module.exports = mongoose.model('professor', professorSchema,'professor');
