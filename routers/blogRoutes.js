const blogController = require('../controllers/blogController.js')
const checkLogin = require('../middlewares/checkLogin')
const authController = require('../controllers/authController')

const router = require('express').Router()

router.route('/')
  .get(authController.protect, blogController.getBlogs)
  .post(checkLogin, blogController.createBlog)

router.route('/:id')
  .get(authController.protect, blogController.searchBlog)
  .put(checkLogin, blogController.updateBlog)
  .delete(checkLogin, blogController.deleteBlog)

module.exports = router
