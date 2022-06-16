module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      reuired: [true, 'Please provide your password']
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'inactive'
    }
  })
  return User
}
