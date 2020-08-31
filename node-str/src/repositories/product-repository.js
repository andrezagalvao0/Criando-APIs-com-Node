'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {    //async introduz os métodos 
    const res = await Product.find({  //await - respera a resposta
        active: true
    }, 'title price slug');
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
            slug: slug,
            active: true
            }, 'title description price slug tags');
    return res;
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id);
    return res;
}

exports.getByTag = async(tag) => {
  const res = Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags');
    return res;
}

exports.create = async(data) => {
    var product = new Product(data); //persistindo um item usando o mongoose
    await product.save(); //salvar o item no BD
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        })
}

exports.delete = async(id) => {
    await Product
        .findOneAndRemove(req.body.id);
}