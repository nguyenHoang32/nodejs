module.exports.requireLogin = function(req, res, next){
    if(!req.cookies.userId){
        res.redirect('/login');
    }
    next();
}