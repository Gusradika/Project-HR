const express = require('express');
const router = express.Router();

//Import Controller
const userController = require('../controllers/UserController');
const employeeController = require('../controllers/EmployeeController'); 

/* GET home page. */
router.get('/', employeeController.getEmployees); 

// Route untuk registrasi user
router.post('/register', userController.createUser);

module.exports = router;
