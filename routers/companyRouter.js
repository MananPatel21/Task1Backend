const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController')

router.get('/all', companyController.getCompanies);
router.post('/', companyController.addCompany);
router.get('/:companyName', companyController.getCompany);

module.exports = router;
