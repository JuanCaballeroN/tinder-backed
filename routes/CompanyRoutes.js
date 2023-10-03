const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/CompanyController');

router.get('/',CompanyController.getCompanys);

router.get('/:id',CompanyController.getCompany);

router.post('/',CompanyController.insertCompany);

router.patch('/:id',CompanyController.updateCompany);

router.delete('/:id',CompanyController.deleteCompany);

module.exports = router;