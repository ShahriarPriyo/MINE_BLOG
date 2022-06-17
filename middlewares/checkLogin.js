const jwt = require('jsonwebtoken')

const checkLogin = (req, res, next) => {
  const { authorization } = req.headers
  try {
    const token = authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const { username, userId } = decoded /// redundant
    req.username = username.toLowerCase()
    req.userId = userId
    next()
  } catch (err) {
    next(err)
  }
}

/// route protection not completed

module.exports = checkLogin
