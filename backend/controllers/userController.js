const User = require('../models/userModel')

// login user
const loginUser = async (req, res) => {
  res.json({ mssg: 'login user' })
}

// signup user
const signUser = async (req, res) => {
  res.json({ mssg: 'signup user' })
}

module.exports = { signUser, loginUser }
