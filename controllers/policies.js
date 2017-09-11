var Policy = require('../models/policy');
const User = require('../models/user')
var jwt = require('jsonwebtoken');
var SECRET= process.env.SECRET;

function index(req, res) {
    Policy.find({}).populate('user').exec().then((policies) => {
       res.status(200).json(policies);
    });
};

function create(req, res) {
    var policy = new Policy(req.body);
    policy.user = req.user._id;
    policy.save(() => res.json(policy));
};
  
  function deletePolicy(req, res) {
    User.findById(req.user._id, (err, user) => {
    user.policies.id(req.params.id).remove();
      user.save(err => {
        res.status(200).json(err);
      })
    })
  }

module.exports = {
    index,
    create,
    delete: deletePolicy
}
