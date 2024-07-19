const facultyModel = require("../models/professor_model");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const facultySignup = async (req, res) => {
  const { name, email, password, designation, education, department, campus, responsibilities } = req.body;

  try {
    const existingFaculty = await facultyModel.findOne({ email });
    if (existingFaculty) {
      return res.status(400).json({ message: "Faculty already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);


    const newFaculty = new facultyModel({
      name,
      email,
      password: hashedPassword,
      designation: Array.isArray(designation) ? designation : [designation],
      education: Array.isArray(education) ? education : [education],
      department,
      campus,
      responsibilities: Array.isArray(responsibilities) ? responsibilities : [responsibilities],
    });
    await newFaculty.save();
    res.status(201).json({ message: "Faculty registered successfully", result: newFaculty.name });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports=facultySignup