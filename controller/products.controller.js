// const db = require('../db.js');
const mongoose = require('mongoose');
const Product = require('../models/products.model');
module.exports.index = function(req, res){
    // let page = req.query.page || 1;//n
    // let perPage = 8; //x
    // let begin = (page - 1) * perPage;
    // let end = page * perPage;
    // let allProducts = db.get('products').value();
    // let numberPage = Math.ceil(allProducts.length / perPage);
    // let products = db.get('products').value().slice(begin, end);
    // res.render('products/products.pug',{
    //     numberPage: numberPage,
    //     products : products
    // })
    
    // Product.find().then(function(products){
    //     console.log(products);
        // res.render('products/products.pug',{
        //     products : products
        // })
    //     console.log(products);
    // })
    Product.find({}, function(err, products) {
        res.render('products/products.pug', {products: products});
     });
}
