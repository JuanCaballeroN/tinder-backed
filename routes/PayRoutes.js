const express = require('express');
const router = express.Router();
const PayController = require('../controllers/PayController');

router.get('/',PayController.getPays);

router.get('/:id',PayController.getPay);

router.post('/',PayController.insertPay);

router.patch('/:id',PayController.updatePay);

router.delete('/:id',PayController.deletePay);

module.exports = router;