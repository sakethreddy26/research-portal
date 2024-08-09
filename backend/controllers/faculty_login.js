const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv'); 
const facultyModel = require('../models/professor_model');

dotenv.config(); 

const secretKey = process.env.JWT_SECRET;

const facultyLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingFaculty = await facultyModel.findOne({ email });
    if (!existingFaculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }

    // const isPasswordCorrect = await bcrypt.compare(password, existingFaculty.password);
    // if (!isPasswordCorrect) {
    //   return res.status(400).json({ message: 'Invalid credentials' });
    // }
    if(existingFaculty.password!==password){
      return res.status(400).json({ message: 'Invalid credentials' });
    } 


    const token = jwt.sign({ name: existingFaculty.name, id: existingFaculty._id }, secretKey, { expiresIn: '1h' });


    res.cookie('auth', token, {
      maxAge: 3600000, 
    });

    res.status(200).json({ result: existingFaculty.name });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.error('Error in facultyLogin:', error);
  }
};

module.exports = { facultyLogin };
