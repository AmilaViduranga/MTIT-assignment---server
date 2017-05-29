/**
 * Created by Amila on 5/25/2017.
 */
var express = require('express');
var router = express.Router();
var Controllers = require('../../Controller/ControllerMap');
var AppointmentController = Controllers.AppointmentController;
/*
 * add apointment
 */
router.post('/add', function (req, res, next) {
    AppointmentController.addAppointment(res, req.body);
})

/*
 * edit appointment
 */
router.post('/update', function (req, res, next) {
    AppointmentController.editAppoitment(res, req.body);
})

/*
 * delete appointment
 */
router.delete('/delete/:id', function(req, res, next) {
    AppointmentController.deleteAppointment(res, req.param('id'));
})

/*
 * view appointment by doctors
 */
router.get('/view/doctor/:id', function(req, res, next) {
    AppointmentController.viewAppointmentByDoctors(res, req.param('id'));
})

/*
 * view appointment by patients
 */
router.get('/view/patient/:id', function(req, res, next) {
    AppointmentController.viewAppointmentByPatient(res, req.param('id'));
})

/*
 * view all appointments
 */
router.get('/view/all', function(req, res, next) {
    AppointmentController.viewAllAppointments(res);
})

module.exports = router;
