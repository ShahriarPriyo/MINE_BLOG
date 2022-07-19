// const userService = require('../../services/userServices')
const Users = require('../../models/userModel')
const httpMocks = require('node-mocks-http')
const contentNegotiation = require('../../middlewares/contentNegotiation')

const jsonData = [
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

describe('testing content negotiation', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Testing sendResponse for json', async () => {
    const mreq = httpMocks.createRequest({
      headers: {
        accept: 'application/json'
      }
    })
    const mres = httpMocks.createResponse({
      req: mreq
    })
    await contentNegotiation.sendResponse(mreq, mres, Users[0])
    const data = mres.send()._getData()
    expect(data).toBeTruthy()
    expect(mres.statusCode).toBe(200)
  })

  test('Testing sendResponse for xml', async () => {
    const mreq = httpMocks.createRequest({
      headers: {
        accept: 'application/xml'
      }
    })
    const mres = httpMocks.createResponse({
      req: mreq
    })
    await contentNegotiation.sendResponse(mreq, mres, Users[0])
    const data = mres.send()._getData()
    expect(data).toBeTruthy()
    expect(mres.statusCode).toBe(200)
  })
})
