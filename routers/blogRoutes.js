const blogController = require('../controllers/blogController.js')
const protectBlog = require('../middlewares/protectBlog')
const protectBlogRoutes = require('../middlewares/protectBlogRoutes')
// const authController = require('../controllers/authController')

const router = require('express').Router()

router.route('/')
  .get(blogController.getBlogs) /// no protection
  .post(protectBlog, blogController.createBlog)

router.route('/:id')
  .get(blogController.searchBlog)
  .put(protectBlogRoutes, blogController.updateBlog)
  .delete(protectBlogRoutes, blogController.deleteBlog)

module.exports = router
