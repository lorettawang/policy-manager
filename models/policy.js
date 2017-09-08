var mongoose = require('mongoose');

var policySchema = new mongoose.Schema({
  gen: String,
  occ: String,
  prod: String,
  pers: String,
  damage: String,
  med: String,
}, {
  timestamps: true
});


module.exports = mongoose.model('Policy', policySchema);