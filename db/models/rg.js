const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Fd, Initiative }) {
      this.belongsTo(Fd, { foreignKey: 'fdId' });
      this.hasMany(Initiative, {
        foreignKey: 'iniToId',
        constraints: false,
        scope: {
          type: 'Rg',
        },
      });
    }
  }
  Rg.init({
    name: DataTypes.STRING,
    fdId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Rg',
  });
  return Rg;
};
