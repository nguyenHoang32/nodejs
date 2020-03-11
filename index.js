const express = require('express');
const bodyParser = require('body-parser');// Nhan req.body
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/express-demo');

const usersRouter = require('./router/users.router');
const loginRouter = require('./router/login.router');
const productsRouter = require('./router/products.router.js');
const cartRouter = require('./router/cart.router');
const apiProductsRoute = require('./api/routes/product.route');
const requireLoginMiddleware = require('./middleware/login.middleware.js');
const sessionMiddleware = require('./middleware/session.middleware');
const app = express();
// Set some defaults (required if your JSON file is empty)

app.use(express.static('public'));

const port = 3000;

// Setup for pug
app.set('view engine', 'pug');
app.set('views', './views');
// Setup for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(sessionMiddleware);
app.get('/', function(req, res){
    res.render('./index.pug');
    
})
app.use('/users', requireLoginMiddleware.requireLogin,usersRouter);
app.use('/login', loginRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/api/products', apiProductsRoute);
app.listen(port, function(){
    console.log('Listening on port ' + port);
})