import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import products from '../data/products';


function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  const { addToCart } = useCart();
  const [favorited, setFavorited] = useState(false);

  const handleFavorite = () => {
    setFavorited(!favorited);
    alert(`${product.name} ${!favorited ? 'added to' : 'removed from'} favorites`);
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
          <button onClick={() => addToCart(product)} style={styles.cartBtn}>Add to Cart</button>
          <button onClick={handleFavorite} style={styles.favBtn}>
            {favorited ? '❤️ Favorited' : '♡ Favorite'}
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
