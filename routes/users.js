const express = require('express');
const router = express.Router();
const userHandler = require("./handlers/users");
const userIdHandler = require("./handlers/users/id");

router.route("/")
  .get(userHandler.get)
  .post(userHandler.post);

router.route("/:userId")
  .get(userIdHandler.get)
  .put(userIdHandler.put)
  .delete(userIdHandler.delete);

module.exports = router;
