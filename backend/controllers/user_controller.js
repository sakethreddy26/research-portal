const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user_model');

const userLogin = async (req, res) => {
  const { employeeId, password } = req.body;

  // Input validation
  if (!employeeId || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await User.findOne({ employeeId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, employeeId: user.employeeId },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie('auth', token, {
      httpOnly: true,
      maxAge: 3600000,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production' // Only send over HTTPS in production
    });

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        employeeId: user.employeeId,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const userSignup = async (req, res) => {
  const { employeeId, name, email, phone, password } = req.body;

  // Input validation
  if (!employeeId || !name || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Password strength validation
  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  try {
    const existingUser = await User.findOne({ 
      $or: [{ email }, { employeeId }] 
    });
    
    if (existingUser) {
      return res.status(400).json({ 
        message: 'User with this email or employee ID already exists' 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      employeeId,
      name,
      email,
      phone,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ 
      message: 'User registered successfully',
      result: newUser.name 
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = { userLogin, userSignup }; 