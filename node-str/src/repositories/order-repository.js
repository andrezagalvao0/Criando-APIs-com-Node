'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

//buscar as orders/pedidos
exports.get = async(data) => {
    var res = await Order
        .find({}, 'number status customer items')
        .populate('customer', 'name') // o populate é para preencher com informações do usuário e produto na hora do get
        .populate('items.product', 'title');
    return res; 
}


exports.create = async(data) => {
    var order = new Order(data); 
    await order.save(); 
}