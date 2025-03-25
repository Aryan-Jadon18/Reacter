import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { user } = useAuth();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  if (!product) return <h2 style={{ padding: '30px' }}>Product not found</h2>;

  const isFavorited = favorites.some(f => f.productId === product.id);
  const favorite = favorites.find(f => f.productId === product.id);

  const toggleFavorite = () => {
    if (!user) return alert('Please login to favorite products');

    if (isFavorited) removeFavorite(favorite.id);
    else addFavorite(product);
  };

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div>
        <h2>{product.name}</h2>
        <p style={styles.price}>₹{product.price}</p>
        <p>{product.description}</p>
        <div style={styles.buttons}>
          <button style={styles.cartBtn}>Add to Cart</button>
          <button onClick={toggleFavorite} style={styles.favBtn}>
            {isFavorited ? '❤️ Remove Favorite' : '♡ Add to Favorites'}
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
