import { useCart } from '../context/CartContext';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate();
  const handleCheckout = async () => {
    try {
      const res = await API.post('/orders/checkout');
      alert(res.data.message);
      navigate('/orders'); // redirect after placing order
    } catch (err) {
      console.error(err);
      alert('Checkout failed. Try again.');
    }
  };
  return (
    <div style={{ padding: '40px' }}>
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={styles.item}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>
                  Remove
                </button>
                <button onClick={handleCheckout} style={styles.checkoutBtn}>
  🧾 Checkout
</button>
              </div>
            </div>
          ))}
          <hr />
          <h3>Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '20px'
  },
  image: {
    width: '100px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '6px'
  },
  removeBtn: {
    backgroundColor: '#ff3333',
    color: '#fff',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  checkoutBtn: {
    marginTop: '20px',
    padding: '12px 20px',
    backgroundColor: '#222',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  }  
};

export default Cart;
