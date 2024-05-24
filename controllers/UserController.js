const UserModel = require('../models/User');

// Controller untuk membuat user baru
const createUser = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ 
        message: error.message 
    });
  }
};

module.exports = {
  createUser
};
