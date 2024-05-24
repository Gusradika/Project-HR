const EmployeeModel = require('../models/Employee');

// Controller untuk mengambil data karyawan
const getEmployees = async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ 
        message: error.message 
    });
  }
};

module.exports = {
  getEmployees
};
