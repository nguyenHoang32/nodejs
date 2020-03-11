const db = require('../db')
let cartsShow = [];
module.exports.index = function(req, res){
    let sessionId = req.cookies.sessionId;
    if(!sessionId){
        res.render('cart/cart.pug');
        return;
    }
    let carts = db.get('sessions').find({id: sessionId}).value().cart;
    let products = db.get('products').value();
    for (let key in carts)
{
    let obj = {};
    const value = carts[key];
    let cartsItem = products.filter(function(product){
        return product.id == key;
    })
    for(let key in cartsItem[0]){
        obj[key] = cartsItem[0][key];
    }
    obj.amount = value;
    cartsShow.push(obj);
    
}
    res.render('cart/cart.pug', {
        carts: cartsShow
    })
}
module.exports.addToCart = function(req, res){
    let productId = req.params.productId;
    let sessionId = req.cookies.sessionId;
    if(!sessionId){
        res.redirect('/products');
        return;
    }
    let amount = db.get('sessions').find({id: sessionId}).get('cart.' + productId, 0).value();
    db.get('sessions').find({id: sessionId}).set('cart' + '.' + productId, amount + 1).write();
    res.redirect('/products');
}