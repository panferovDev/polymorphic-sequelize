const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Rg, Initiative }) {
      this.hasMany(Rg, { foreignKey: 'fdId' });
      this.hasMany(Initiative, {
        foreignKey: 'iniToId',
        constraints: false,
        scope: {
          type: 'Fd',
        },
      });
    }
  }
  Fd.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Fd',
  });
  return Fd;
};
