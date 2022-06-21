const { DataTypes } = require('sequelize')
const sequelize = require('./index')
const User = sequelize.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [3, 30]
    /// 30 charcter allowing here
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    isAlpha: true,
    allowNull: false,
    isLowerCase: true
    /// case sensitive, number and alphabet
  },
  email: {
    type: DataTypes.STRING,
    isEmail: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    isNumeric: true,
    reuired: [true, 'Please provide your password'],
    len: [6, 8]
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'inactive'
  }
})
module.exports = User
