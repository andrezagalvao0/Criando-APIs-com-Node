'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/product-controller'); //referenciar o controller

//get - para obter informações
router.get('/', (req, res, next) => {  //esse '/' é a rota
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
});

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tags', controller.getByTag);
//post- para enviar informações
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);



module.exports = router;