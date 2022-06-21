const sequelize = require('./index')
const { DataTypes } = require('sequelize')

const blog = sequelize.define('bloglist', {
  title: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    unique: true
  },
  author: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: false
  }
})
module.exports = blog
