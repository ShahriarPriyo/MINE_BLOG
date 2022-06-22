const signupService = require('../services/signupService')
const signinService = require('../services/signinService')
const catchAsync = require('../utilities/catchAsync')
const AppError = require('../utilities/appError')
// const jwt = require('jsonwebtoken')
// const { promisify } = require('util')
// const db = require('../models')
const sendResponse = require('../middlewares/contentNegotiation')

exports.newUser = catchAsync(async (req, res, next) => {
  const data = await signupService.registration(req.body)
  return sendResponse(req, res, data, 201)
})

exports.signinUser = catchAsync(async (req, res, next) => {
  const data = await signinService.login(req.body)
  if (!data) {
    return next(new AppError('Unauthorized Access', 401))
  }
  return sendResponse(req, res, data, 200)
})
