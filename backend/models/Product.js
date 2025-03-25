import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User.js';

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  image: DataTypes.STRING, // image URL for now
  accountNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

// Link seller to products
User.hasMany(Product, { onDelete: 'CASCADE' });
Product.belongsTo(User);

export default Product;
