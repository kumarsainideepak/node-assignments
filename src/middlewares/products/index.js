const getProduct = (req, res) => {
    req.app.locals.getData();
    res.json(req.app.locals.products.find(val => val.id == req.params.id));
};

const getAllProducts = (req, res) => {
    req.app.locals.getData();
    setTimeout(() => {
        res.json(req.app.locals.products);
    }, 100);;
}

const deleteProduct = (req, res) => {
    req.app.locals.products = req.app.locals.products.filter(val => val.id != req.params.id);
    res.json(req.app.locals.products);
    req.app.locals.storeData();
};

const updateProduct = (req, res) => {
    req.body.id = req.params.id;
    const index = req.app.locals.products.indexOf(req.app.locals.products.find(val => val.id == req.params.id));
    req.app.locals.products[index] = req.body;
    res.json(req.app.locals.products);
    req.app.locals.storeData();
};

const newProduct = (req, res) => {
    req.body.id = Math.floor(Math.random() * 100);
    req.app.locals.products.push(req.body);
    res.json(req.app.locals.products);
    req.app.locals.storeData();
};

module.exports = {getAllProducts, getProduct, updateProduct, deleteProduct, newProduct};