const express = require('express');

const controller = require('../controller/login.controller.js');
const router = express.Router();

router.get('/', controller.login);
router.post('/', controller.postLogin);
module.exports = router;