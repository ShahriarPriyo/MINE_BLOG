const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const signinService = require('../../services/signinService')
const User = require('../../models/userModel')
const myUser = [
  {
    id: 1,
    name: 'Russell25',
    username: 'Russell25',
    email: 'r25@gmail.com',
    password: '$2b$10$mxVpoCl.xBqoljkDpGA1le2r8ua7gZiNPlnX5Wiro2MMFwGkm3RJK',
    status: 'active',
    createdAt: '2022-06-22T08:07:27.000Z',
    updatedAt: '2022-06-22T08:07:27.000Z'
  }
]

describe('User Sign in', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('Sign in process testing', async () => {
    jest.spyOn(User, 'findOne').mockImplementation((inputData) => {
      return inputData
    })
    jest.spyOn(bcrypt, 'compare').mockReturnValue(true)
    jest
      .spyOn(jwt, 'sign')
      .mockReturnValue(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhaWZ1cjEiLCJpYXQiOjE2NTU4OTAwODksImV4cCI6MTY2MzY2NjA4OX0.stF4hbNyCFUQGS6MloWxyIfHRY3MKr4JpeVesYiLz_0'
      )

    const { username, password } = myUser[0]
    const loginData = { username, password }
    const user = await signinService.login(loginData)
    expect(User.findOne).toHaveBeenCalledTimes(1)
    expect(bcrypt.compare).toHaveBeenCalledTimes(1)
    expect(jwt.sign).toHaveBeenCalledTimes(1)
    expect(User.findOne).toHaveBeenCalledWith({
      where: {
        username
      }
    })
  })

  test('first if condition check', async () => {
    jest.spyOn(User, 'findOne').mockImplementation((inputData) => {
      return inputData
    })
    const { password } = myUser[0]
    const data = { password }
    const valid = await signinService.login(data)
    expect(valid).toEqual(null)
    expect(User.findOne).toHaveBeenCalledTimes(0)
  })

  test('second if condition check', async () => {
    jest.spyOn(User, 'findOne').mockReturnValue(null)
    jest.spyOn(bcrypt, 'compare').mockReturnValue(true)
    const { username, password } = myUser[0]
    const data = { username, password }
    const valid = await signinService.login(data)
    expect(User.findOne).toHaveBeenCalledTimes(1)
    expect(bcrypt.compare).toHaveBeenCalledTimes(0)
    expect(valid).toEqual(null)
  })

  test('third if condition check', async () => {
    jest.spyOn(User, 'findOne').mockImplementation((inputData) => {
      return inputData
    })
    jest.spyOn(bcrypt, 'compare').mockReturnValue(false)
    jest
      .spyOn(jwt, 'sign')
      .mockReturnValue(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhaWZ1cjEiLCJpYXQiOjE2NTU4OTAwODksImV4cCI6MTY2MzY2NjA4OX0.stF4hbNyCFUQGS6MloWxyIfHRY3MKr4JpeVesYiLz_0'
      )
    const { username, password } = myUser[0]
    const data = { username, password }
    const valid = await signinService.login(data)
    expect(User.findOne).toHaveBeenCalledTimes(1)
    expect(User.findOne).toHaveBeenCalledWith({ where: { username } })
    expect(bcrypt.compare).toHaveBeenCalledTimes(1)
    expect(jwt.sign).toHaveBeenCalledTimes(0)
    expect(valid).toEqual(null)
  })
})
