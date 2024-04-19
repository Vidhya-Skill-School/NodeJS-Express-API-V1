const express = require('express');
const { apiTimeout, timeoutMiddleware } = require('./products.validator');
const { getProducts } = require('./products.controller');

const productRouter = express.Router();

productRouter.get('/', apiTimeout, getProducts);

productRouter.get('/test', timeoutMiddleware, getProducts);

module.exports = productRouter;
