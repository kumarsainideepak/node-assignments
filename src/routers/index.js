const router = require('express').Router();

const productsRouter = require('../controllers/product');

router.use('/products', productsRouter);

module.exports = router;