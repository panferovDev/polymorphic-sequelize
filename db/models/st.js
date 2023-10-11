const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class St extends Model {
    static associate({ Rg, Initiative }) {
      this.belongsTo(Rg, { foreignKey: 'rgId' });
      this.hasMany(Initiative, {
        foreignKey: 'iniToId',
        constraints: false,
        scope: {
          type: 'St',
        },
      });
    }
  }
  St.init({
    name: DataTypes.STRING,
    rgId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'St',
  });
  return St;
};
