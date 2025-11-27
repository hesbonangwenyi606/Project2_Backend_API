const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { protect, admin } = require('../middleware/auth');

router.get('/', productController.list);
router.get('/:id', productController.get);
router.post('/', protect, admin, productController.create);
router.put('/:id', protect, admin, productController.update);
router.delete('/:id', protect, admin, productController.remove);

module.exports = router;
