/**
 * Created by Amila on 5/20/2017.
 */
var Modules = require('../../models/Models');
var Appointment = Modules.Appointment;

function AppointmentController() {
	/*
	 * add appointment
	 */
 	this.addAppointment = function(res, appointmentInstance) {
 		Appointment.create({
            question: appointmentInstance.reason,
            acceeptStatus: 0,
            doctorAnswer: null,
			DoctorId: appointmentInstance.doctorId,
			UserId: appointmentInstance.userId
		}).then(function(result) {
 			return res.send(result);
 		})
 	}

 	/*
 	 * edit appointment
 	 */
 	this.editAppoitment = function(res, appointmentInstance) {
 		Appointment.find({
			where: {
				id: appointmentInstance.id
			}
		}).then(function(result) {
            result.update({
                DoctorId: appointmentInstance.doctorId,
                UserId: appointmentInstance.userId,
				reason: appointmentInstance.reason,
                acceeptStatus: appointmentInstance.status,
                doctorAnswer: appointmentInstance.doctorAnswer
			}).then(function(result) {
				res.send(result);
			})
		})
 	}

 	/*
 	 * delete appointment
 	 */
 	this.deleteAppointment = function(res, appointmentId) {
 		Appointment.find({
			where: {
				id: appointmentId
			}
		}).then(function(result) {
			result.destroy();
		}).then(function(result) {
			return res.send(result);
		})
	}

	/*
	 * get appointment by doctors
	 */
	this.viewAppointmentByDoctors = function(res, doctorId) {
		Appointment.findAll({
			where: {
				DoctorId: doctorId
			}
		}).then(function(result) {
			return res.send(result);
		})
	}

	/*
	 * view appointment by the patient
	 */
    this.viewAppointmentByPatient= function(res, patientId) {
        Appointment.findAll({
            where: {
                UserId: patientId
            }
        }).then(function(result) {
            return res.send(result);
        })
    }

    /*
     * view all the appointment
     */
	this.viewAllAppointments = function(res) {
		Appointment.findAll().then(function(result) {
			return res.send(result);
		})
	}
}

module.exports = new AppointmentController();