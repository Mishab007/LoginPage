
const express = require("express");
const router = express.Router();
const validation = require("../middleware/validation")
const{ getSignup, postSignup,getLogin,postLogin,getIndex,getDistroy} = require('../controllers/maincontroller')

router.get('/',getLogin)
router.get('/signup',getSignup)
router.post('/signupAction',validation , postSignup)
router.get('/login',getLogin)
router.post('/loginAction',postLogin)
router.get('/home',getIndex)
router.get('/logout',getDistroy)

module.exports = router;