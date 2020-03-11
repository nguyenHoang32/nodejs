const express = require('express');
const multer  = require('multer')

const controller = require('../controller/users.controller');
const validate = require('../validate/users.validate.js')
const router = express.Router();
const upload = multer({ dest: './public/uploads' })
router.get('/', controller.index);
router.get('/cookie', function(req, res, next){
    res.cookie('user-id', 12345);
    res.send('Hello');
})
router.get('/search', controller.search);
router.get('/create', controller.create);
router.get('/:id', controller.get);
router.post('/create', upload.single('avatar'), validate.postCreate, controller.postCreate);
module.exports = router;
