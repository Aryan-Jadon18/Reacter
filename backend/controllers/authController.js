import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) return res.status(400).json({ message: 'All fields required' });

  const userExists = await User.findOne({ where: { email } });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const user = await User.create({ name, email, password });

  res.status(201).json({
    id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user.id),
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).json({ message: 'Invalid email or password' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: 'Invalid email or password' });

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user.id),
  });
};

export const getMe = async (req, res) => {
  const { id, name, email } = req.user;
  res.json({ id, name, email });
};

export const becomeSeller = async (req, res) => {
  const user = req.user;

  if (user.role === 'seller') {
    return res.status(400).json({ message: 'Already a seller' });
  }

  user.role = 'seller';
  await user.save();

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    message: 'You are now a seller!'
  });
};
