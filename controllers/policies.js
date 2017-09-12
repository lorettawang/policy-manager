var Policy = require('../models/policy');
const User = require('../models/user');
var request =('request');
var jwt = require('jsonwebtoken');
var SECRET= process.env.SECRET;

function index(req, res) {
    User.findById(req.user._id)
    .populate('policy')
    .exec((err, user) => {
        res.status(200).json(user);
    })
}

function create(req, res) {
    Policy.findById(req.params.id, (err, policy) => {
        policy = new Policy(req.body);
        policy.save((err, policy) => {
            User.findById(req.user._id, (err, user) => {
                user.policy.push(policy._id);
                user.save((err, savedUser) => {
                    res.status(200).json(policy);
                })
            })
        })

    })
}

function deletePolicy(req, res) {
    console.log("request", req);
        Policy.findById(req.params.id, (err, policy) => {
            policy.remove();
            policy.save();
            res.status(200);
            })
        }

module.exports = {
    index,
    create,
    delete: deletePolicy
}
