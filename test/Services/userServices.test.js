const Users = require('../../models/userModel')
const userService = require('../../services/userServices')

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
  },
  {
    id: 2,
    name: 'Bravo74',
    username: 'Bravo74',
    email: 'b74@gmail.com',
    password: '$2b$10$q2E.rZ8SZiEiFm8PC4bwzezVANzv1N19qqXdlL/Rl3PlFPGe2h/3O',
    status: 'active',
    createdAt: '2022-06-22T08:16:03.000Z',
    updatedAt: '2022-06-22T08:16:03.000Z'
  }
]

describe('user service test', () => {
  test('Get all user', async () => {
    jest.spyOn(Users, 'findAll').mockReturnValue(testUsers)
    const allUsers = await userService.getAllUser()
    expect(allUsers).toBe(testUsers)
  })

  test('Update user userData', async () => {
    jest.spyOn(Users, 'update').mockReturnValue(1)
    const { id, name, username, email } = testUsers[0]
    const userData = { name, username, email }
    const user = await userService.updateUser(id, userData)
    expect(Users.update).toHaveBeenCalledTimes(1)
    expect(Users.update).toHaveBeenCalledWith(userData, { where: { id } })
    expect(user).toBe(1)
  })

  test('User Delete', async () => {
    jest.spyOn(Users, 'destroy').mockReturnValue()
    const { id } = testUsers[0]
    const user = await userService.deleteUser(id)
    expect(Users.destroy).toHaveBeenCalledTimes(1)
    expect(Users.destroy).toHaveBeenCalledWith({ where: { id } })
    expect(user).toBe()
  })
})
