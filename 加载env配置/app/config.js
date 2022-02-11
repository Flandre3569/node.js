const dotenv = require('dotenv')

dotenv.config();

const {
  SERVER_PORT,
  MYSQL_PORT,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE
} = process.env

module.exports = {
  SERVER_PORT,
  MYSQL_PORT,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE
};