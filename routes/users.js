const express = require('express');
const router = express.Router();
const userHandler = require("./handlers/users");
const userIdHandler = require("./handlers/users/id");
const verifytoken = require('../middlewares/verifytoken');

router.route("/")
  .get( verifytoken, userHandler.get)
  .post( verifytoken, userHandler.post);

router.route("/:userId")
  .get( verifytoken, userIdHandler.get)
  .put( verifytoken, userIdHandler.put)
  .delete( verifytoken, userIdHandler.delete);

module.exports = router;
