var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TimeDAO Test' });
});

module.exports = router;
