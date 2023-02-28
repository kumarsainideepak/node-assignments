const mainRouter = require('express').Router();
const middlewares = require('../../middlewares/products');

mainRouter.route('/products/:id')
    .get(middlewares.getProduct)
    .delete(middlewares.deleteProduct)
    .put(middlewares.updateProduct);

mainRouter.route('/products')
    .get(middlewares.getAllProducts)
    .post(middlewares.newProduct);
    
module.exports = mainRouter;


// const router1 = require('./get-products');
// const router2 = require('./add-product');
// const router3 = require('./delete-product');
// const router4 = require('./get-product');

// mainRouter.param('id', (req, res, next, val) => {
//     res.json(req.app.locals.products.find((value) => value.id == val));
//     console.log(req.app.locals.products.find((value) => value.id == val));
//     console.log(req.app.locals.products);
// })

// mainRouter.param('product_id', (req, res, next, val) => {
//     req.app.locals.products = req.app.locals.products.filter((value) => value.id != val);
//     next();
// })


// mainRouter.use('/products', router1);
// mainRouter.use('/products', router2);
// mainRouter.use('/products/:id', router4);
// mainRouter.use('/products/:product_id',router3);