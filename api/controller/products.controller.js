// const db = require('../db.js');
const mongoose = require('mongoose');
const schema = mongoose.schema;
const ABC = require('../../models/api.model');
module.exports.index = async function(req, res){
    let abc = await ABC.find();
    res.json(abc);
}
