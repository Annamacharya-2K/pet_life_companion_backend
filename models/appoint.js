const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    },
    email:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    },
    service:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    date:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    time:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    message:{
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    status:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    }

},{timestamps:true})
module.exports = mongoose.model("Appointment",appointmentSchema)