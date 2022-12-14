const express = require('express');
const app = express();
const productRouter = require('./app/product/routes');
const productRouterV2 = require('./app/product_v2/routes');
const logger = require('morgan');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api/v1', productRouter);
app.use('/api/v2', productRouterV2);
app.listen(port, () => console.log(`server: http://localhost:${port}`));
