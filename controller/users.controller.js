const db = require('../db');
const shortid = require('shortid');

module.exports = {
    index: function(req, res){
        let userId = req.cookies.userId;
        let user = db.get('users').find({id : userId}).value();
        res.render('users/index.pug', {
            users : db.get('users').value(),
            user : user
        });
    },
    search: function(req, res){
        let nameSearch = req.query.name;
        let result = db.get('users').value().filter(function(user){
            return user.name.toLowerCase().includes(nameSearch.toLowerCase());
        });
        res.render('users/search.pug', {
            result: result
        });
    },
    create: function(req, res){
        res.render('users/create.pug');
    },
    get: function(req, res){
        let id = req.params.id;
        let user = db.get('users').find({id : id}).value();
        res.render('users/view.pug', {
            user : user
        })
    },
    postCreate: function(req, res){
        req.body.id = shortid.generate();
        req.body.path = req.file.path.split('\\').slice(1).join('\\');
        db.get('users').push(req.body).write();
        res.redirect('/users');
    },
}