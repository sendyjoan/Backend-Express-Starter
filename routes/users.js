const express = require('express');
const router = express.Router();
const userHandler = require("./handlers/users");
const userIdHandler = require("./handlers/users/id");

router.get('/', userHandler.get);
router.post('/', userHandler.post);
router.get('/:userId', userIdHandler.get);
router.put('/:userId', userIdHandler.put);
router.delete('/:userId', userIdHandler.delete);

module.exports = router;
