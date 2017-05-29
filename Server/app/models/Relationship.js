
var Models = require('./Models');
var connection = require('./Connection');
var Relationship = function() {

    /**added by Amila*/
    Models.Users.hasMany(Models.Appointment)
    Models.Appointment.belongsTo(Models.Users)
    Models.Appointment.belongsTo(Models.Users, {foreignKey: 'DoctorId', targetKey: 'id'})

    connection
        .sync()
        .then(function(err) {
            console.log("Database created");
        }, function (err) {
            console.log('An error occurred while creating the table:', err);
        });
}

module.exports = new Relationship();