
var Sequelize = require('sequelize');
var sequelize = require('sequelize')
    , sequelize = new Sequelize('channel', 'root', '', {
      dialect: "mysql",
      port:    3306,
    });

module.exports = sequelize;

