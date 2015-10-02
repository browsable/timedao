var express = require('express'),
    router = express.Router(),
    formidable = require('formidable'),
    fs         = require('fs-extra'),
    util       = require('util'),
    path       = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/users/register').post(function(req, res) {
  var tag      = req.body.tag,
      username = req.body.username,
      email    = req.body.email,
      password = req.body.password;

  req.checkBody('email', 'not a valid email.').isEmail();
  req.checkBody('username', '2-32 character').len(2, 32);
  req.checkBody('password', '8-32 character').len(8, 32);
  var errors = req.validationErrors();

  if (tag === "register") {
    if (errors) {
      res.json({message: errors});
    }else {
      res.json({success: "1", message: "wow success"});
      res.render('test', { tag: tag,username: username,email: email,password: password});
    }

  }else {
    res.json({success: "2", message: "not a register request"});
  }

});

module.exports = router;
