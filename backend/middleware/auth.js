const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.auth;
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

module.exports = verifyToken; 