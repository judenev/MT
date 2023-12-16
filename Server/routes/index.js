var express = require('express');
var router = express.Router();
const userHelpers = require('../Controllers/userController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.post('/userlogin',userHelpers.userLogin)
router.post('/userreg',userHelpers.userReg)
module.exports = router;
