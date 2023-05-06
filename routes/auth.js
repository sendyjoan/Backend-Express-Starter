const express = require("express");
const router = express.Router();
const authHandler = require('./handlers/auth');

router.get('/login', authHandler.login);
router.post('/register', authHandler.register);

module.exports = router;