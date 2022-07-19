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

describe('blog service testing', () => {
  test('Blog Create process testing', async () => {
    jest.spyOn(blog, 'create').mockImplementation((inputData) => {
      return inputData
    })
    const { title, username, description } = testBlog[0]
    const userData = { title, username, description }
    const myblog = await blogService.createblog(userData)
    expect(blog.create).toHaveBeenCalledTimes(1)
    expect(blog.create).toHaveBeenCalledWith(userData)
    expect(myblog).toBeTruthy()
  })

  test('Get all blog process testing', async () => {
    jest.spyOn(blog, 'findAll').mockReturnValue(testBlog)
    const allBlog = await blogService.getAllBlog()
    expect(allBlog).toBeTruthy()
  })

  test('Search blog by ID', async () => {
    jest.spyOn(blog, 'findOne').mockReturnValue(testBlog[0])
    const { id } = testBlog[0]
    const myblog = await blogService.searchById(id)
    expect(blog.findOne).toHaveBeenCalledTimes(1)
    expect(blog.findOne).toHaveBeenCalledWith({
      where: { id }
    })
    expect(myblog).toBe(testBlog[0])
  })

  test('Update blog userData', async () => {
    jest.spyOn(blog, 'update').mockReturnValue(1)
    const { id, title, username, description } = testBlog[0]
    const userData = { title, username, description }
    const myblog = await blogService.updateBlog(id, userData)
    expect(blog.update).toHaveBeenCalledTimes(1)
    expect(blog.update).toHaveBeenCalledWith(userData, { where: { id } })
    expect(myblog).toBe(1)
  })

  test('Blog delete', async () => {
    jest.spyOn(blog, 'destroy').mockReturnValue()
    const { id } = testBlog[0]
    const myblog = await blogService.deleteBlog(id)
    expect(blog.destroy).toHaveBeenCalledTimes(1)
    expect(blog.destroy).toHaveBeenCalledWith({ where: { id } })
    expect(myblog).toBe()
  })
})
