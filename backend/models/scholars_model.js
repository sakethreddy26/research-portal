const mongoose=require("mongoose")

const scholarSchema = new mongoose.Schema({
    name: String,
    year: Number,
    duration: String,
    fellowship: String,
    exam: String,
  });

module.exports=mongoose.model("scholars",scholarSchema,"scholars");