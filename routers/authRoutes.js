const authController = require('../controllers/authController.js')

const router = require('express').Router()

router.post('/signup', authController.newUser)

router.post('/signin', authController.signinUser)

module.exports = router
