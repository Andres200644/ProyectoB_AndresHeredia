const Cart = require('../models/cart');
const Product = require('../models/product');

const addToCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id });
        if (cart) {
            const product = cart.products.find(p => p.product.equals(req.body.productId));
            if (product) {
                product.quantity += req.body.quantity;
            } else {
                cart.products.push({ product: req.body.productId, quantity: req.body.quantity });
            }
            await cart.save();
        } else {
            const newCart = new Cart({
                user: req.user.id,
                products: [{ product: req.body.productId, quantity: req.body.quantity }]
            });
            await newCart.save();
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { addToCart };
