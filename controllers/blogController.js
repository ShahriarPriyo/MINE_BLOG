const blogService = require('../services/blogServices.js')
const catchAsync = require('../utilities/catchAsync')
const AppError = require('../utilities/appError')
const sendResponse = require('../middlewares/contentNegotiation')

exports.createBlog = catchAsync(async (req, res, next) => {
  const newBlog = await blogService.createblog(req.body)

  return sendResponse(req, res, newBlog, 201)
})

exports.getBlogs = catchAsync(async (req, res, next) => {
  const blogs = await blogService.getAllBlog()
  return sendResponse(req, res, blogs, 200)
})

exports.searchBlog = catchAsync(async (req, res, next) => {
  const blogs = await blogService.searchById(req.params.id)

  if (!blogs) {
    return next(new AppError('No blog found with that ID', 404))
  }

  return sendResponse(req, res, blogs, 200)
})

exports.updateBlog = catchAsync(async (req, res, next) => {
  const blogs = await blogService.updateBlog(req.params.id, req.body)

  if (!blogs) {
    return next(new AppError('No blog found with that ID', 404))
  }

  return sendResponse(req, res, blogs, 200)
})

exports.deleteBlog = catchAsync(async (req, res, next) => {
  const blogs = await blogService.deleteBlog(req.params.id)

  if (!blogs) {
    return next(new AppError('No blog found with that ID', 404))
  }

  res.status(204).json({})
})
