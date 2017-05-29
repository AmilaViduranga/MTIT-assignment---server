/**
 * Created by Amila on 5/20/2017.
 */
var express = require('express');
var router = express.Router();
var Controllers = require('../../Controller/ControllerMap');
var UserController = Controllers.UserController;
/*
 * insert a new user
 */
router.post('/add', function(req, res, next) {
    UserController.insertUser(res, req.body);
})

/*
 * edit excisting user
 */
router.put('/update', function (req, res, next) {
    UserController.updateUser(res, req.body);
})

/*
 * delete excisting user
 */
router.delete('/delete/:id', function(req, res, next) {
    UserController.deleteUser(res, req.param('id'));
})

/*
 * get all the doctors
 */
router.get('/get/doctors', function(req, res, next) {
    UserController.getAllDoctors(res);
})

/*
 * get all patients
 */
router.get('/get/patients', function(req, res, next) {
    UserController.getAllPatients(res);
})

/*
 * get all users
 */
router.get('/get/all', function(req, res, next) {
    UserController.getAllUsers(res);
})

/*
 * get single user information
 */
router.get('/get/individual/:id', function(req, res, next) {
    UserController.getSpecificUser(res, req.param('id'));
})

/*
 * login to system
 */
router.post('/login', function(req, res, next) {
    UserController.loginToSystem(res, req.body);
})

module.exports = router;