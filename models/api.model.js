const mongoose = require('mongoose');
let abcSchema = new mongoose.Schema({
    name : String,
})
let ABC = mongoose.model('ABC', abcSchema, 'sessions');

module.exports = ABC;