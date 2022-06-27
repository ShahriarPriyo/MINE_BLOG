const blog = require('../../models/BlogsModel')
const blogService = require('../../services/blogServices')

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

describe('#blogServicesTest', () => {
  test('Get all users', async () => {
    jest.spyOn(blog, 'findAll').mockReturnValue(testBlog)
    const test = await blogService.getAllBlog()
    expect(test).toBe(testBlog)
  })
})
