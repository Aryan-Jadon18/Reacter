import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Product from './Product.js';
import User from './User.js';

const Order = sequelize.define('Order', {
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
});

Order.belongsTo(Product);
Order.belongsTo(User, { as: 'buyer', foreignKey: 'buyerId' });
Order.belongsTo(User, { as: 'seller', foreignKey: 'sellerId' });

export default Order;
