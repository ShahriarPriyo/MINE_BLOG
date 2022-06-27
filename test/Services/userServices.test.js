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

describe('#UserServicesTest', () => {
  test('Get all users', async () => {
    jest.spyOn(Users, 'findAll').mockReturnValue(testUsers)
    const test = await userService.getAllUser()
    expect(test).toBe(testUsers)
  })

  test('update user data', async () => {
    jest.spyOn(Users, 'update')
  })
})
