const userController = require('../controllers/userController.js')
const checkLogin = require('../middlewares/checkLogin')

const router = require('express').Router()

router.get('/', userController.getUsers)

router.route('/:id')
  .put(checkLogin, userController.updateUser)
  .delete(checkLogin, userController.deleteUser)

module.exports = router
