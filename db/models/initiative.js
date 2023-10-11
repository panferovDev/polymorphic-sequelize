const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    static associate({ Fd, St, Rg }) {
      this.belongsTo(Fd, { foreignKey: 'iniToId', constraints: false, as: 'fd' });
      this.belongsTo(St, { foreignKey: 'iniToId', constraints: false, as: 'st' });
      this.belongsTo(Rg, { foreignKey: 'iniToId', constraints: false, as: 'rg' });
    }
  }
  Initiative.init({
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    iniToId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Initiative',
  });
  return Initiative;
};
