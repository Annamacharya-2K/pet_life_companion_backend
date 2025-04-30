const express = require('express');
const router = express.Router();
const {submitform,getAppointmentqueries,fetchBookedTimeSlots,sendMail,declineMail } = require('../controllers/appoint');


router.post('/submitform',submitform)
router.get('/getAppointmentqueries',getAppointmentqueries)
router.get('/getbookedslots', fetchBookedTimeSlots)
router.post('/sendmail',sendMail)
router.post('/declinemail',declineMail)

module.exports = router;