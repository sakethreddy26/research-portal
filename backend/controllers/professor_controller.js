const Professor = require('../models/professor_model');

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

module.exports = {
    getProfessorById,
    getAllProfessors
}

