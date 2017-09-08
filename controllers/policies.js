var Policy = require('../models/policy');
const User = require('../models/user')
var jwt = require('jsonwebtoken');
var SECRET= process.env.SECRET;

function create(req, res) {
    Policy.create(req.body)
    .then(policy => {
        User.findById(req.user._id).then(user => {
            user.policies.push(policies._id)
            user.save(function() {
            })
        });
    })
    .catch(err => {
        res.json({error: err});
    });
};

function index(req, res) {
    User.findById(req.user._id).populate('policies')
    .then(user => {
      res.json(user.policies);
    });
  }
  
  function deletePolicy(req, res) {
    User.findById(req.user._id, (err, user) => {
      user.policies.remove(req.params.id);
      user.save(err => {
        res.status(200).json(err);
      })
    })
  }

module.exports = {
    index,
    create,
    deletePolicy
}
