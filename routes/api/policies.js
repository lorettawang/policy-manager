var express = require('express');
var router = express.Router();
var User = require('../../models/policy');
var Policy = require ('../../models/policy');
var policiesCtrl = require('../../controllers/policies');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.get('/', checkAuth, policiesCtrl.index);
router.post('/:id', checkAuth, policiesCtrl.create);
router.delete('/:id', checkAuth, policiesCtrl.delete);

/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;