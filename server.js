const express = require('express')
const AppError = require('./utilities/appError.js')
const globalErrorHandler = require('./controllers/errorController.js')
const app = express()
require('dotenv').config()
const blogRouter = require('./routers/blogRoutes.js')
const userRouter = require('./routers/userRoutes.js')
const authRouter = require('./routers/authRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/posts', blogRouter)

app.use('/api/v1/users', userRouter)

app.use('/api/v1', authRouter)

const PORT = process.env.PORT || 3000

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalErrorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
