import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User.js';

const Favorite = sequelize.define('Favorite', {
  productId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: DataTypes.STRING,
  price: DataTypes.FLOAT,
  image: DataTypes.STRING,
});

User.hasMany(Favorite, { onDelete: 'CASCADE' });
Favorite.belongsTo(User);

export default Favorite;
