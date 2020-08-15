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


module.exports = router;