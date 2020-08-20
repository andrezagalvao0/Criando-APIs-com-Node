'use strict' 

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb+srv://balta:balta@cluster0.pbduh.mongodb.net/<dbname>');

//Carrea os Models
const Prodct = require('./models/product');

//Carregar as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());//todo conteúdo vai ser convertido para json
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute); 
app.use('/products', productRoute);



module.exports = app;

