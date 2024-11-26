const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    stock: Number,
    imageUrl: String
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
