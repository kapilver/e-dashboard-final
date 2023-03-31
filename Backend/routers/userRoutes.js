const express = require('express')
const router = new express.Router();
const loginController = require('../controller/loginController');
const registerController = require('../controller/registerController');

// const validationLogin = require('../middleware/loginValidation') 
// const signupValidation = require('../middleware/signupValidation')


router.post('/login',loginController);
router.post("/register",registerController);

module.exports = router