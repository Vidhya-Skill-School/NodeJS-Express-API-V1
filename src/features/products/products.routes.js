import express from 'express';
import { apiTimeout, timeoutMiddleware } from './products.validator';
import { getProducts } from './products.controller';

const productRouter = express.Router();

productRouter.get('/', apiTimeout, getProducts);

productRouter.get('/test', timeoutMiddleware, getProducts);

export default productRouter;
