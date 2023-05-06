var express = require('express');
const { User } = require('../models');
var router = express.Router();

router.post('/', async (req, res) => {
  
  const body = req.body;

  if(!body.name || !body.email) {
    return res.status(400).json({message: "Name and Email must be provided"});
  }
  
  const user = await User.create({
    name: 'Sendy Joan',
    email: 'sendy@mail.com',
  });

  return res.json(user);
});

module.exports = router;
