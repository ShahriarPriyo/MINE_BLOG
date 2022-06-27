const Sequelize = require('sequelize')

const sequelize = new Sequelize('myblog_db', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
})
module.exports = sequelize
