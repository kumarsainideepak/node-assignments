const express = require('express');

module.exports = function (app, router) {
    const fs = require('fs/promises');

    function storeData() {
        fs.writeFile(`./assets/data.json`, JSON.stringify(app.locals.products)).then(()=>{console.log('persisted')}).catch(()=>{console.log('Error while persisting');});
    }

    app.locals.storeData = storeData;

    function getData() {
        fs.readFile(`./assets/data.json`, {encoding: 'utf-8'}).then(result => { app.locals.products = JSON.parse(result);})
    }

    app.locals.getData = getData;


    app.use(express.json());
    app.use('/', router);

    app.listen(8080);

}