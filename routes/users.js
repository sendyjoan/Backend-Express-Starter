var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// GET USER
router.get('/', (req, res) => {
  return res.json({
    id: 1,
    name: 'Sendy Joan Kevin',
    role: 'admin',
  });
});



module.exports = router;
