import API from '../api/axios';

function SellerProductCard({ product, onEdit, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm('Delete this product?')) {
      await API.delete(`/products/${product.id}`);
      onDelete();
    }
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h4>{product.name}</h4>
      <p style={styles.price}>₹{product.price}</p>
      <p style={styles.smallText}>Payout to: <strong>{product.accountNumber}</strong></p>

      <div style={styles.btns}>
        <button onClick={onEdit} style={styles.edit}>Edit</button>
        <button onClick={handleDelete} style={styles.delete}>Delete</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: '220px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  price: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#222',
  },
  smallText: {
    fontSize: '0.85rem',
    color: '#555',
    marginBottom: '10px',
  },
  btns: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  edit: {
    backgroundColor: '#444',
    color: '#fff',
    padding: '6px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  delete: {
    backgroundColor: '#ff4444',
    color: '#fff',
    padding: '6px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default SellerProductCard;
