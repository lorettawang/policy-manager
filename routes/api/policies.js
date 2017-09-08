var express = require('express');
var router = express.Router();
var User = require('../../models/policy');
var policiesCtrl = require('../../controllers/policies');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.get('/', checkAuth, policiesCtrl.index);
router.post('/', checkAuth, policiesCtrl.create);
router.delete('/:id', policiesCtrl.deletePolicy);


/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  console.log('Smerge', req.user)
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;