import Order from '../models/Order.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

export const placeOrder = async (req, res) => {
  try {
    // For now, simulate cart with one product (you can expand later)
    const fakeProductId = 1; // Hardcoded for now
    const product = await Product.findByPk(fakeProductId);

    if (!product) return res.status(404).json({ message: 'Product not found' });

    const newOrder = await Order.create({
      productId: product.id,
      buyerId: req.user.id,
      sellerId: product.userId,
      status: 'pending',
    });

    res.json({ message: 'Order placed!', order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Checkout error' });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { buyerId: req.user.id },
      include: [{ model: Product }],
    });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};
