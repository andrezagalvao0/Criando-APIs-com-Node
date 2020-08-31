'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({     //criar um novo schema
    customer: {
        type: mongoose.Schema.Types.ObjectId,   //referenciando a coleção de clientes
        ref: 'Customer'
    },
    number: {
        type: String,
        required: true
    },
    createDate: {
        type: Date, 
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    
    items: [{
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        prince: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
});



module.exports = mongoose.model('Order', schema);


