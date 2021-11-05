const { Sequelize, DataTypes, Model } = require('sequelize');
const { purge } = require('../07_express框架/routers/users');

const sequelize = new Sequelize('students', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql'
});

class Product extends Model { };
Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: DataTypes.DOUBLE,
  score: DataTypes.DOUBLE
}, {
  tableName: 'products',
  sequelize
});

async function queryProducts() {
  // 查询数据库中所有的内容
  const result = await Product.findAll();
  console.log(result);
}

queryProducts();