/**
 * Created by Amila on 5/20/2017.
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Users = connection.define('User', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    type: Sequelize.INTEGER
},{
    tableName: 'User',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Users;