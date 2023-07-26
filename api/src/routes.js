const { Router } = require('express');

const ProductController = require('./app/controllers/ProductController');
const EmployeeController = require('./app/controllers/EmployeeController');
const ClientController = require('./app/controllers/ClientController');
const SaleController = require('./app/controllers/SaleController');

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

router.get('/clients', ClientController.index);
router.get('/clients/:id', ClientController.show);
router.delete('/clients/:id', ClientController.delete);
router.post('/clients/', ClientController.store);
router.put('/clients/:id', ClientController.update);

router.get('/sales', SaleController.index);
router.get('/sales/:id', SaleController.show);
router.delete('/sales/:id', SaleController.delete);
// router.post('/sales/', SaleController.store);
// router.put('/sales/:id', SaleController.update);

module.exports = router;
