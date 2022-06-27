const userController = require('../../controllers/userController')
const userService = require('../../services/userServices')
const httpMocks = require('node-mocks-http')
const contentNegotiation = require('../../middlewares/contentNegotiation')

const testUsers = [
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

describe('Testilng all functions of userController', () => {
  beforeEach(() => {
    jest.spyOn(contentNegotiation, 'sendResponse').mockImplementation((req, res, inputData, statuscode) => {
      res.statusCode = statuscode || 200
      return res.json(inputData)
    })
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Testing getUsers', async () => {
    jest.spyOn(userService, 'getAllUser').mockReturnValue(testUsers)
    const mreq = httpMocks.createRequest({ })
    const mres = httpMocks.createResponse()
    const mnext = jest.fn()
    const mystatus = 200
    await userController.getUsers(mreq, mres, mnext)
    const mresdata = mres._getJSONData()
    expect(userService.getAllUser).toHaveBeenCalledTimes(1)
    expect(contentNegotiation.sendResponse).toHaveBeenCalledTimes(1)
    expect(contentNegotiation.sendResponse).toHaveBeenCalledWith(mreq, mres, testUsers, 200)
    expect(mres.statusCode).toBe(mystatus)
    expect(mresdata).toEqual(testUsers)
  })

  test('Testing updateUser', async () => {
    jest.spyOn(userService, 'updateUser').mockReturnValue(testUsers)
    const mreq = httpMocks.createRequest({
      params: {
        id: testUsers[0].id
      },
      body: {
        name: testUsers[0].name,
        email: testUsers[0].email,
        password: testUsers[0].password
      }
    })
    const mres = httpMocks.createResponse()
    const mnext = jest.fn()
    const mystatus = 200
    await userController.updateUser(mreq, mres, mnext)
    const mresdata = mres._getJSONData()
    expect(userService.updateUser).toHaveBeenCalledTimes(1)
    expect(contentNegotiation.sendResponse).toHaveBeenCalledTimes(1)
    expect(contentNegotiation.sendResponse).toHaveBeenCalledWith(mreq, mres, testUsers, 200)
    expect(mres.statusCode).toBe(mystatus)
    expect(mresdata).toEqual(testUsers)
  })

  test('testing deleteUser', async () => {
    jest.spyOn(userService, 'deleteUser').mockReturnValue(testUsers)
    const mreq = httpMocks.createRequest({
      method: 'DELETE',
      params: {
        id: testUsers[0].id
      }
    })
    const mres = httpMocks.createResponse()
    const mnext = jest.fn()
    const mystatus = 204
    await userController.deleteUser(mreq, mres, mnext)
    expect(mres.statusCode).toBe(mystatus)
  })
})
