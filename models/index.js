const Sequelize = require('sequelize')

// const sequelize = new Sequelize(
//   dbConfig.DB,
//   dbConfig.USER,
//   dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     operatorsAliases: false,

//     pool: {
//       max: dbConfig.pool.max,
//       min: dbConfig.pool.min,
//       acquire: dbConfig.pool.acquire,
//       idle: dbConfig.pool.idle
//     }
//   }
// )

const sequelize = new Sequelize('myblog_db', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
})
module.exports = sequelize

// sequelize.authenticate()
//   .then(() => {
//     console.log('Database Connected')
//   })
//   .catch(err => {
//     console.log('Error is ' + err)
//   })

// const db = {}

// db.Sequelize = Sequelize
// db.sequelize = sequelize

// db.user = require('./UserModel.js')(sequelize, DataTypes)
// // db.bloglist = require('./BlogsModel.js')(sequelize, DataTypes)
// /// edit this system
// db.sequelize.sync({ force: false })
//   .then(() => {
//     console.log('Database Sync done')
//   })
