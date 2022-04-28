const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const generate = (payload) => {
  const jwtConfig = {
    expiresIn: '7d',
  };
  const token = jwt.sign(payload, SECRET, jwtConfig);
  return token;
};

const verify = (token) => {
  const decoded = jwt.verify(token, SECRET);
  return decoded;
};

module.exports = {
  generate,
  verify,
};
