const express = require('express');
const router = express.Router();
const ContractController = require('../controllers/ContractController');

router.get('/',ContractController.getContracts);

router.get('/:id',ContractController.getContract);

router.post('/',ContractController.insertContract);

router.patch('/:id',ContractController.updateContract);

router.delete('/:id',ContractController.deleteContract);

module.exports = router;