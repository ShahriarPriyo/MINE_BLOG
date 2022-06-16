const userService = require('../services/userServices.js')
const catchAsync = require('../utilities/catchAsync')
const sendResponse = require('../middlewares/contentNegotiation')

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await userService.getAllUser()

  return sendResponse(req, res, users, 200)
})

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await userService.updateUser(req.params.id, req.body)

  return sendResponse(req, res, user, 200)
})

exports.deleteUser = catchAsync(async (req, res, next) => {
  res.status(204)
})
