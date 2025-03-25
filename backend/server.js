import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './config/db.js';
import User from './models/User.js';
import authRoutes from './routes/authRoutes.js'; // ✅ added
import Favorite from './models/Favorite.js';
import favoriteRoutes from './routes/favoriteRoutes.js';


dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // ✅ added
app.use('/api/favorites', favoriteRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server after DB connection
try {
  await sequelize.authenticate();
  console.log('✅ MySQL connected');

  await sequelize.sync(); // sync all models
  console.log('📦 Models synced');

  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
} catch (err) {
  console.error('❌ DB connection error:', err);
}
