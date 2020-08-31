'use strict' 

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb+srv://balta:balta@cluster0.pbduh.mongodb.net/%3Cdbname%3E');

//Carrea os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//Carregar as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json());//todo conteúdo vai ser convertido para json
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute); 
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);




module.exports = app;

