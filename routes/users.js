var express = require('express');
const { User } = require('../models');
var router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();

  return res.json(users);
});

router.post('/', async (req, res) => {
  
  const body = req.body;

  if(!body.name) {
    return res.status(400).json({message: "Name must be provided!"});
  }else if (!body.email) {
    return res.status(400).json({message: "Email must be provided!"})
  }
  
  const user = await User.create({
    name: body.name,
    email: body.email,
  });

  return res.json({message: "Success Add User!", data: user});
});

module.exports = router;
