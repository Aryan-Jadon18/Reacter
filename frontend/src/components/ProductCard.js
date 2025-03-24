import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <h3>{product.name}</h3>
        <p style={styles.price}>₹{product.price}</p>
        <button style={styles.button}>View Details</button>
      </div>
    </Link>
  );
}

  
  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      width: '250px',
      textAlign: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      marginBottom: '10px',
    },
    price: {
      fontWeight: 'bold',
      margin: '10px 0',
    },
    button: {
      padding: '8px 12px',
      backgroundColor: '#222',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  };
  
  export default ProductCard;
  