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
      <p>₹{product.price}</p>
      <button onClick={onEdit} style={styles.edit}>Edit</button>
      <button onClick={handleDelete} style={styles.delete}>Delete</button>
    </div>
  );
}

const styles = {
  card: {
    width: '200px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '4px'
  },
  edit: {
    marginTop: '10px',
    marginRight: '8px',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  delete: {
    backgroundColor: '#ff4444',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default SellerProductCard;
