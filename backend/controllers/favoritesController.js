import Favorite from '../models/Favorite.js';

export const getFavorites = async (req, res) => {
  const favorites = await Favorite.findAll({ where: { UserId: req.user.id } });
  res.json(favorites);
};

export const addFavorite = async (req, res) => {
  const { productId, name, price, image } = req.body;
  const exists = await Favorite.findOne({ where: { productId, UserId: req.user.id } });

  if (exists) return res.status(400).json({ message: 'Already favorited' });

  const favorite = await Favorite.create({
    productId,
    name,
    price,
    image,
    UserId: req.user.id,
  });

  res.status(201).json(favorite);
};

export const removeFavorite = async (req, res) => {
  const id = req.params.id;
  const fav = await Favorite.findOne({ where: { id, UserId: req.user.id } });
  if (!fav) return res.status(404).json({ message: 'Favorite not found' });

  await fav.destroy();
  res.json({ message: 'Removed from favorites' });
};
