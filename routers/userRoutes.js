const userController = require('../controllers/userController.js')
const protectUserRoutes = require('../middlewares/protectUserRoutes')

const router = require('express').Router()

router.get('/', userController.getUsers)

router.route('/:id')
  .put(protectUserRoutes, userController.updateUser)
  .delete(protectUserRoutes, userController.deleteUser)

module.exports = router
