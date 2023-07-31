const express = require('express');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productControllers');
const router = express.Router();



router.post('/', createProduct)

router.get('/', getProducts);

router.get('/:id', getProduct);

// update a product
router.put('/:id', updateProduct);

// delete a product
router.delete('/:id', deleteProduct);

module.exports = router;