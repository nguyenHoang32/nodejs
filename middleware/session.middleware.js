const shortId = require('shortid');
const db = require('../db');
module.exports = function(req, res, next){
    if(!req.cookies.sessionId){
        let sessionId = shortId.generate();
        res.cookie('sessionId', sessionId);
        db.get('sessions').push({id : sessionId}).write();
    }
    
    next();
}