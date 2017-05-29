/**
 * Created by Amila on 5/20/2017.
 */
var Modules = require('../../models/Models');
var User = Modules.Users;

function UserController() {
    /*
     * get all the doctors
     */
    this.getAllDoctors = function(res) {
        User.findAll({
            where: {
                type: 1
            },
            attributes: [
                'id', 'name'
            ]
        }).then(function(data) {
            res.send(data);
        })
    }

    /*
     * get all patients
     */
    this.getAllPatients = function(res) {
        User.findAll({
            where: {
                type: 0
            },
            attributes: [
                'id', 'name'
            ]
        }).then(function(data) {
            res.send(data);
        })
    }

    /*
     * get all users
     */
    this.getAllUsers = function(res) {
        User.findAll({
            attributes: [
                'id', 'name', 'type', 'password'
            ]
        }).then(function(data) {
            res.send(data);
        })
    }

    /*
     * get specific doctor
     */
    this.getSpecificUser= function(res, id) {
        User.find({
            where: {
                id: id
            }
        }).then(function(data) {
            res.send(data);
        })
    }

    /*
     * insert new user
     */
    this.insertUser = function(res, userInstance) {
        User.create(userInstance).then(function(data) {
            res.send(data);
        })
    }

    /*
     * update user
     */
    this.updateUser = function(res, userInstance) {
        User.find({
            where: {
                id: userInstance.id
            }
        }).then(function(data) {
            if(data) {
                data.updateAttributes({
                    name: userInstance.name,
                    type: userInstance.type,
                    password: userInstance.password
                }).then(function(result) {
                    return res.send(result);
                })
            }
        })
    }

    /*
     * delete user
     */
    this.deleteUser = function(res, id) {
        User.find({
            where: {
                id: id
            }
        }).then(function(data) {
            data.destroy();
        }).then(function(result) {
            return res.send(result);
        })
    }

    /*
     * login to the system
     */
    this.loginToSystem = function(res, loginInstance) {
        var userName = loginInstance.userName;
        var password = loginInstance.password;

        User.findAll({
            where: {
                name: userName
            }
        }).then(function(result) {
            if(result.length !== 0) {
                result.forEach(function(singleInstance) {
                    if(singleInstance.password === password) {
                        return res.send({
                            status: 200,
                            message: "Successfully Login to the system",
                            userInfo: singleInstance
                        });
                    }
                })
            }
            return res.send({
                status: 404,
                message: "Invalid attempt"
            });
        })
    }
}

module.exports = new UserController();