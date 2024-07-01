const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController')

router.post('/', contactController.addContact);
router.get('/:companyName', contactController.getContactByCompanyName);

module.exports = router;
