const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductsController');

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.create);

module.exports = routes;