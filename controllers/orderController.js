const Order = require('../models/Order');
const Product = require('../models/Product');

exports.create = async (req, res, next) => {
  try {
    const { items } = req.body; // items: [{ product: productId, qty }]
    if (!items || !Array.isArray(items) || items.length === 0) return res.status(400).json({ error: 'Order items required' });
    // calculate total and validate products
    let total = 0;
    for (const it of items) {
      const prod = await Product.findById(it.product);
      if (!prod) return res.status(400).json({ error: `Product not found: ${it.product}` });
      if (it.qty > prod.stock) return res.status(400).json({ error: `Not enough stock for ${prod.name}` });
      total += prod.price * (it.qty || 1);
    }
    // reduce stock
    for (const it of items) {
      await Product.findByIdAndUpdate(it.product, { $inc: { stock: - (it.qty || 1) }});
    }
    const order = await Order.create({ user: req.user._id, items, total });
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

exports.getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('items.product');
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const orders = await Order.find().populate('user','name email').populate('items.product');
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    order.status = status || order.status;
    await order.save();
    res.json(order);
  } catch (err) {
    next(err);
  }
};
