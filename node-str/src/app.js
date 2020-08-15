'use strict' 

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Carregas as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());//todo conteúdo vai ser convertido para json
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute); 
app.use('/products', productRoute);



module.exports = app;

