const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({    
    nip: String,
    name: String,
    gender: String,
    email: String,
    phone: String,
    type: String,
    division: String 
}, { 
    collection: 'karyawan' 
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
module.exports = EmployeeModel;
