const blogService = require('../services/blogServices.js')
const catchAsync = require('../utilities/catchAsync')
const contentNegotiation = require('../middlewares/contentNegotiation')

exports.createBlog = catchAsync(async (req, res, next) => {
  const newBlog = await blogService.createblog(req.body)

  return contentNegotiation.sendResponse(req, res, newBlog, 201)
})

exports.getBlogs = catchAsync(async (req, res, next) => {
  const blogs = await blogService.getAllBlog()
  return contentNegotiation.sendResponse(req, res, blogs, 200)
})

exports.searchBlog = catchAsync(async (req, res, next) => {
  const blogs = await blogService.searchById(req.params.id)

  return contentNegotiation.sendResponse(req, res, blogs, 200)
})

exports.updateBlog = catchAsync(async (req, res, next) => {
  const blogs = await blogService.updateBlog(req.params.id, req.body)

  return contentNegotiation.sendResponse(req, res, blogs, 200)
})

exports.deleteBlog = catchAsync(async (req, res, next) => {
  await blogService.deleteBlog(req.params.id)

  res.status(204).json({})
})
