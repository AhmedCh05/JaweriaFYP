const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: {type:String,require:true},
    email : {type:String,require:true,unique:true},
    password:{type:String,require:true},
    speciality:{type:String,require:true}
});

const Doctor = mongoose.model('Doctor',DoctorSchema);

module.exports =  Doctor;