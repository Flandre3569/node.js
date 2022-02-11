const dotenv = require('dotenv')

dotenv.config()
const { SERVER_PORT } = process.env

module.exports = {
  SERVER_PORT
};