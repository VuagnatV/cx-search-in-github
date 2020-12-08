const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv')

module.exports = function() {
  dotenv.config()

  const { DATABASE_HOST: host, DATABASE_PORT, DATABASE_USER: user, DATABASE_PASS: password, DATABASE_NAME: database } = process.env

  //return new Sequelize("searchGithub", "postgres", "postgres", {
  return new Sequelize(database, user, password, {
    dialect: 'postgres',
    host,
    //port: parseInt(DATABASE_PORT, 10),
  })
  
}

