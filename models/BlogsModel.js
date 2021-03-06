module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define('bloglist', {
    title: {
      type: DataTypes.STRING(10000),
      allowNull: false
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(10000),
      allowNull: false
    }
  })
  return blog
}
