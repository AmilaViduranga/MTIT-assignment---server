/*
 * handle the url for any get, put, post and delete request
 * developer : Amila
 */

 
var express = require('express');
var router = express.Router();

var UserRouter = require('./moduleRoutes/UserRoutes');
var AppointmentRouter = require('./moduleRoutes/AppointmentRoutes');

router.use('/user/', UserRouter);
router.use('/appointment/', AppointmentRouter);

module.exports = router;
