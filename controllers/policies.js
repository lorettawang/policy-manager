var Policy = require('../models/policy');
const User = require('../models/user');
var request =('request');
var jwt = require('jsonwebtoken');
var SECRET= process.env.SECRET;

function index(req, res) {
    Policy.find({}).then(policies => res.json(policies));
}

function create(req, res) {
    var policy = new Policy(req.body);
    policy.user = req.user._id;
    policy.save((err, policy) => {
        res.json(policy);
    });
};

function deletePolicy(req, res) {
    User.findById(req.user._id, (err, user) => {
        user.policies.id(req.params.id).remove()
        user.save(() => {
            Policy.findById(req.params.id, (err, policy) => {
                policy.remove();
                res.status(200);
            })
        })
    })
}

module.exports = {
    index,
    create,
    delete: deletePolicy
}
