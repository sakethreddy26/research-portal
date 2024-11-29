// const facultyModel = require("../models/prof_signup");
// const bcrypt = require("bcrypt");
// // const jwt = require("jsonwebtoken");

// const facultySignup = async (req, res) => {
//   const { name, email, password, designation, education, department, campus, responsibilities } = req.body;

//   try {
//     const existingFaculty = await facultyModel.findOne({ email });
//     if (existingFaculty) {
//       return res.status(400).json({ message: "Faculty already exists" });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);


//     const newFaculty = new facultyModel({
//       name,
//       email,
//       password: hashedPassword,
//       designation: Array.isArray(designation) ? designation : [designation],
//       education: Array.isArray(education) ? education : [education],
//       department,
//       campus,
//       responsibilities: Array.isArray(responsibilities) ? responsibilities : [responsibilities],
//     });
//     await newFaculty.save();
//     res.status(201).json({ message: "Faculty registered successfully", result: newFaculty.name });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

// module.exports=facultySignup

const facultyModel = require("../models/prof_signup");
const bcrypt = require("bcrypt");

const facultySignup = async (req, res) => {
  const {
    name,
    empId,
    password,
    phno,
    dept,
    campus,
    panNo,
    qualification,
    designation,
    expertise,
    dateofJoining,
    totalExpBfrJoin,
    googleScholarId,
    profileImg,
  } = req.body;

  try {
    // Check for existing faculty by empId
    const existingFaculty = await facultyModel.findOne({ empId });
    if (existingFaculty) {
      return res.status(400).json({ message: "Faculty already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new faculty instance
    const newFaculty = new facultyModel({
      empId,
      name,
      password: hashedPassword,
      phno,
      dept,
      campus,
      panNo,
      qualification,
      designation,
      expertise,
      dateofJoining,
      totalExpBfrJoin,
      googleScholarId,
      profileImg: profileImg, // Set to null if not provided
    });

    // Save the new faculty
    await newFaculty.save();
    res.status(201).json({ message: "Faculty registered successfully", result: newFaculty.name });
  } catch (error) {
    console.error("Error during faculty registration:", error); // Log the error for debugging
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

module.exports = facultySignup;
