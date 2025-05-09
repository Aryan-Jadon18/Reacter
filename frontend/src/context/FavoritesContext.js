import { createContext, useContext, useEffect, useState } from 'react';
import API from '../api/axios';
import { useAuth } from './AuthContext';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      API.get('/favorites')
        .then(res => setFavorites(res.data))
        .catch(() => setFavorites([]));
    } else {
      setFavorites([]);
    }
  }, [user]);

  const addFavorite = async (product) => {
    try {
      const res = await API.post('/favorites', product);
      setFavorites(prev => [...prev, res.data]);
    } catch (err) {
      alert('Please login to add favorites');
    }
  };

  const removeFavorite = async (favoriteId) => {
    await API.delete(`/favorites/${favoriteId}`);
    setFavorites(prev => prev.filter(fav => fav.id !== favoriteId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
