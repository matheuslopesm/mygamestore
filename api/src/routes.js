const { Router } = require('express');

const ProductController = require('./app/controllers/ProductController');

const router = Router();

router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);
router.delete('/products/:id', ProductController.delete);
router.post('/products/', ProductController.store);
router.put('/products/:id', ProductController.update);

module.exports = router;
