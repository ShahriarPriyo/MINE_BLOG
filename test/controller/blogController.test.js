const blogController = require('../../controllers/blogController')
const contentNegotiation = require('../../middlewares/contentNegotiation')
const blogService = require('../../services/blogServices')
const httpMocks = require('node-mocks-http')

const testBlog = [
  {
    id: 2,
    title: 'testing',
    username: 'Russell25',
    description: 'testing two',
    createdAt: '2022-06-22T08:09:16.000Z',
    updatedAt: '2022-06-22T08:09:16.000Z'
  }
]

describe('Testilng all functions of blogController', () => {
  beforeEach(() => {
    jest.spyOn(contentNegotiation, 'sendResponse').mockImplementation((req, res, inputData, statuscode) => {
      res.statusCode = statuscode || 200
      return res.json(inputData)
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Testing createBlog', async () => {
    jest.spyOn(blogService, 'createblog').mockReturnValue(testBlog)
    const mreq = httpMocks.createRequest({
      params: {
        id: testBlog[0].id
      },
      body: {
        title: testBlog[0].title,
        username: testBlog[0].username,
        description: testBlog[0].description
      }
    })
    const mres = httpMocks.createResponse()
    const mnext = jest.fn()
    const mystatus = 201
    await blogController.createBlog(mreq, mres, mnext)
    const mresdata = mres._getJSONData()
    expect(blogService.createblog).toHaveBeenCalledTimes(1)
    // expect(blogService.updateBlog).toHaveBeenCalledWith(testBlog[0].id, testBlog[0].title, testBlog[0].username, testBlog[0].description)
    expect(contentNegotiation.sendResponse).toHaveBeenCalledTimes(1)
    expect(contentNegotiation.sendResponse).toHaveBeenCalledWith(mreq, mres, testBlog, 201)
    expect(mres.statusCode).toBe(mystatus)
    expect(mresdata).toEqual(testBlog)
  })

  test('Testing getBlogs', async () => {
    jest.spyOn(blogService, 'getAllBlog').mockReturnValue(testBlog)
    const mreq = httpMocks.createRequest({})
    const mres = httpMocks.createResponse()
    const mnext = jest.fn()
    const mystatus = 200
    await blogController.getBlogs(mreq, mres, mnext)
    const mresdata = mres._getJSONData()
    expect(blogService.getAllBlog).toHaveBeenCalledTimes(1)
    expect(blogService.getAllBlog).toHaveBeenCalledWith()
    expect(contentNegotiation.sendResponse).toHaveBeenCalledTimes(1)
    expect(contentNegotiation.sendResponse).toHaveBeenCalledWith(mreq, mres, testBlog, 200)
    expect(mres.statusCode).toBe(mystatus)
    expect(mresdata).toEqual(testBlog)
  })

  test('Testing searchBlog', async () => {
    jest.spyOn(blogService, 'searchById').mockReturnValue(testBlog)
    const mreq = httpMocks.createRequest({
      params: {
        id: testBlog[0].id
      }
    })
    const mres = httpMocks.createResponse()
    const mnext = jest.fn()
    const mystatus = 200
    await blogController.searchBlog(mreq, mres, mnext)
    const mresdata = mres._getJSONData()
    expect(blogService.searchById).toHaveBeenCalledTimes(1)
    expect(blogService.searchById).toHaveBeenCalledWith(testBlog[0].id)
    expect(contentNegotiation.sendResponse).toHaveBeenCalledTimes(1)
    expect(contentNegotiation.sendResponse).toHaveBeenCalledWith(mreq, mres, testBlog, 200)
    expect(mres.statusCode).toBe(mystatus)
    expect(mresdata).toEqual(testBlog)
  })

  test('Testing updateBlog', async () => {
    jest.spyOn(blogService, 'updateBlog').mockReturnValue(testBlog)
    const mreq = httpMocks.createRequest({
      params: {
        id: testBlog[0].id
      },
      body: {
        title: testBlog[0].title,
        username: testBlog[0].username,
        description: testBlog[0].description
      }
    })
    const mres = httpMocks.createResponse()
    const mnext = jest.fn()
    const mystatus = 200
    await blogController.updateBlog(mreq, mres, mnext)
    const mresdata = mres._getJSONData()
    expect(blogService.updateBlog).toHaveBeenCalledTimes(1)
    // expect(blogService.updateBlog).toHaveBeenCalledWith(testBlog[0].id, testBlog[0].title, testBlog[0].username, testBlog[0].description)
    expect(contentNegotiation.sendResponse).toHaveBeenCalledTimes(1)
    expect(contentNegotiation.sendResponse).toHaveBeenCalledWith(mreq, mres, testBlog, 200)
    expect(mres.statusCode).toBe(mystatus)
    expect(mresdata).toEqual(testBlog)
  })

  test('testing deleteBlog', async () => {
    jest.spyOn(blogService, 'deleteBlog').mockReturnValue(testBlog)
    const mreq = httpMocks.createRequest({
      method: 'DELETE',
      params: {
        id: testBlog[0].id
      }
    })
    const mres = httpMocks.createResponse()
    const mnext = jest.fn()
    const mystatus = 204
    await blogController.deleteBlog(mreq, mres, mnext)
    expect(mres.statusCode).toBe(mystatus)
  })
})
