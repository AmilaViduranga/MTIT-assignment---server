var Sequelize = require('sequelize');
var connection  = require('./../Connection');
var Users = require('./User');

var Appointment = connection.define('Appointment', {
    question: Sequelize.STRING,
    acceeptStatus: Sequelize.INTEGER,
    doctorAnswer: Sequelize.STRING
},{
    tableName: 'Appointment',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Appointment;