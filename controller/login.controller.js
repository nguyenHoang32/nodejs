const db = require('../db.js');
module.exports.login = function(req, res){
    res.render('login/login.pug');
}
module.exports.postLogin = function(req, res){
    let email = req.body.email;
    let password = req.body.password;
    let user = db.get('users').find({email : email}).value();
    if(!user){
        console.log('User does not exsit');
        return;
    }
    if(!user.password === password){
        return;
    }
    res.cookie('userId', user.id);
    res.redirect('/users');

}