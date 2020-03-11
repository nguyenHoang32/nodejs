const mongoose = require('mongoose');

let usersSchema = new mongoose.Schema({
    email : String,
    password : String,
    name : String,
    avatar : String,
    phone: String
})
let Users = mongoose.model('Users', userSchema, 'users');

module.exports = Users;