const jwt = require('jsonwebtoken');
const User = require('../models/user_model');

const profile = async (req, res) => {
  const token = req.cookies.auth;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password'); // Exclude password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ message: 'Failed to authenticate token' });
  }
};

module.exports = profile;
