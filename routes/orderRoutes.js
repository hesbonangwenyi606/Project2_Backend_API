const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { protect, admin } = require('../middleware/auth');

router.post('/', protect, orderController.create);
router.get('/my', protect, orderController.getMyOrders);
router.get('/', protect, admin, orderController.getAll);
router.put('/:id', protect, admin, orderController.updateStatus);

module.exports = router;
