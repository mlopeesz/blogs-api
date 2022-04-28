const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const generateToken = (payload) => {
  const jwtConfig = {
    expiresIn: '7d',
  };
  const token = jwt.sign(payload, SECRET, jwtConfig);
  return token;
};

module.exports = generateToken;
