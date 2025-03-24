import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

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
  }
};

export default Cart;
