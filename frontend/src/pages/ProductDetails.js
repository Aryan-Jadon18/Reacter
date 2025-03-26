import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/axios';
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext'; // Assuming you have a cart context

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [favorited, setFavorited] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);

  const { user } = useAuth();
  const { addToCart } = useCart();
  const { favorites } = useFavorites();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Error loading product:', err);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (user && product?.id) {
      API.get('/favorites')
        .then(res => {
          const match = res.data.find(f => f.productId === product.id);
          if (match) {
            setFavorited(true);
            setFavoriteId(match.id);
          }
        })
        .catch(() => {});
    }
  }, [user, product]);
  

  const toggleFavorite = async () => {
    try {
      if (!favorited) {
        const res = await API.post('/favorites', { productId: product.id });
        setFavoriteId(res.data.id);
        setFavorited(true);
      } else {
        await API.delete(`/favorites/${favoriteId}`);
        setFavorited(false);
        setFavoriteId(null);
      }
    } catch (err) {
      alert('Login to favorite products');
    }
  };

  const handleAddToCart = () => {
    if (product) addToCart(product);
  };

  if (!product) return <h2 style={{ padding: '30px' }}>Product not found</h2>;

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div>
        <h2>{product.name}</h2>
        <p style={styles.price}>₹{product.price}</p>
        <p>{product.description}</p>

        <div style={styles.buttons}>
          <button onClick={handleAddToCart} style={styles.cartBtn}>
            Add to Cart
          </button>
          <button onClick={toggleFavorite} style={styles.favBtn}>
            {favorited ? '❤️ Remove Favorite' : '♡ Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '40px',
    padding: '40px',
    alignItems: 'center',
  },
  image: {
    width: '300px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  buttons: {
    marginTop: '20px',
    display: 'flex',
    gap: '10px'
  },
  cartBtn: {
    padding: '10px 16px',
    backgroundColor: '#222',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  favBtn: {
    padding: '10px 16px',
    backgroundColor: '#ff3366',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default ProductDetails;
