const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET; 

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["x-access-token"];

  if (authHeader) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.sendStatus(403); 
      }
      req.user = decoded;
      next();
    });
  } else {
    res.sendStatus(401); 
  }
};

const signToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); 
};

module.exports = { verifyToken, signToken };
