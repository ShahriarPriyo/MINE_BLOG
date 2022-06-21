// module.exports = {
//   HOST: 'localhost',
//   USER: 'root',
//   PASSWORD: '',
//   DB: 'myblog_db',
//   dialect: 'mysql',

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// }
const sequelize = require('../models/index')
const db = async () => {
  try {
    await sequelize.sync({ force: true }).then((result) => {
      console.log('Database connected')
    })
  } catch (err) {
    console.log(err)
    return err
  }
}
module.exports = db
