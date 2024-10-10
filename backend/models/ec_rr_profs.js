const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema()



module.exports = mongoose.model('display_profs', professorSchema, 'display_profs');
