const userService = require('../services/userServices.js')
const catchAsync = require('../utilities/catchAsync')
const contentNegotiation = require('../middlewares/contentNegotiation')

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await userService.getAllUser()

  return contentNegotiation.sendResponse(req, res, users, 200)
})

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await userService.updateUser(req.params.id, req.body)

  return contentNegotiation.sendResponse(req, res, user, 200)
})

exports.deleteUser = catchAsync(async (req, res, next) => {
  res.status(204)
})
