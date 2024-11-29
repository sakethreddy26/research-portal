const Professor = require('../models/professor_model');
const display_profs = require("../models/ec_rr_profs")

const getAllProfessors = async (req, res) => {
  try {
    const professors = await Professor.find();
    res.status(200).json(professors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProfessorById = async (req, res) => {
  try {
    // console.log(req.params.id)
    const professor = await Professor.findById(req.params.id);
    if (!professor) {
      return res.status(404).json({ message: 'Professor not found' });
    }
    res.status(200).json(professor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProfessorbyemail=async(req,res)=>{
  try {
    // console.log(req.params.id)
    const professor = await display_profs.find({email:req.params.email});
    if (!professor) {
      return res.status(404).json({ message: 'Professor not found' });
    }
    res.status(200).json(professor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const get_all_rr_ec_profs = async (req, res) => {
  try {
    const professors = await display_profs.find();
    res.status(200).json(professors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}
module.exports = {
  getProfessorById,
  getAllProfessors,
  get_all_rr_ec_profs,
  getProfessorbyemail
}

