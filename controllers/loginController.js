const loginServices = require('../services/loginServices');

const login = async (req, res, next) => {
  try {
    const token = await loginServices.login(req.body);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
