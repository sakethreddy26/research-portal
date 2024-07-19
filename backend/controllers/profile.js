const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const facultyModel = require('../models/professor_model');

dotenv.config();

const secretKey = process.env.JWT_SECRET;

const profile = async (req, res) => {
  const token = req.cookies.auth;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    const existingFaculty = await facultyModel.findById(decoded.id);
    if (!existingFaculty) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(existingFaculty);
  } catch (error) {
    res.status(500).json({ message: 'Failed to authenticate token' });
  }
}

module.exports = profile;
