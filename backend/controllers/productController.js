import Product from '../models/Product.js';

export const getMyProducts = async (req, res) => {
  const products = await Product.findAll({ where: { UserId: req.user.id } });
  res.json(products);
};

export const createProduct = async (req, res) => {
  const { name, description, price, image, accountNumber } = req.body;

  const product = await Product.create({
    name,
    description,
    price,
    image,
    accountNumber,
    UserId: req.user.id,
  });

  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ where: { id, UserId: req.user.id } });

  if (!product) return res.status(404).json({ message: 'Product not found' });

  const { name, description, price, image, accountNumber } = req.body;
  await product.update({ name, description, price, image, accountNumber });

  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ where: { id, UserId: req.user.id } });

  if (!product) return res.status(404).json({ message: 'Product not found' });

  await product.destroy();
  res.json({ message: 'Product deleted' });
};
