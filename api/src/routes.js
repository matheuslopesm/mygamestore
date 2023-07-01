const { Router } = require('express');

const ProductController = require('./app/controllers/ProductController');
const EmployeeController = require('./app/controllers/EmployeeController');

const router = Router();

router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);
router.delete('/products/:id', ProductController.delete);
router.post('/products/', ProductController.store);
router.put('/products/:id', ProductController.update);

router.get('/employees', EmployeeController.index);
router.get('/employees/:id', EmployeeController.show);
router.delete('/employees/:id', EmployeeController.delete);
router.post('/employees/', EmployeeController.store);
router.put('/employees/:id', EmployeeController.update);

module.exports = router;
