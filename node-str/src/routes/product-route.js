'use strict';

const express = require('express');
const router = express.Router();

//get - para obter informações
router.get('/', (req, res, next) => {  //esse '/' é a rota
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
});

//post- para enviar informações
router.post('/', (req, res, next) => {
    res.status(201).send(req.body); //res - enviando uma resposta; 201 - é para representar o created; req.body - para pegar o corpo da requisição
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;//recupera um paramentro
    res.status(200).send({
        id: id,
        item: req.body
    }); 
});

router.delete('/', (req, res, next) => {
    res.status(200).send(req.body); 
});

module.exports = router;