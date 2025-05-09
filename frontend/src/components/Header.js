import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header style={styles.header}>
      <h2 style={styles.logo}><Link to="/" style={styles.link}>🛒 Reacter</Link></h2>
      <nav>
        <ul style={styles.nav}>
          <li><Link to="/products" style={styles.link}>Products</Link></li>
          <li><Link to="/cart" style={styles.link}>Cart</Link></li>

          {user ? (
            <>
              <li style={styles.link}>Hi, {user.name}</li>
              <li><button onClick={logout} style={styles.logoutBtn}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" style={styles.link}>Login</Link></li>
              <li><Link to="/register" style={styles.link}>Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#222',
    color: '#fff',
  },
  logo: {
    margin: 0,
  },
  nav: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    margin: 0,
    padding: 0,
    alignItems: 'center'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  logoutBtn: {
    background: 'transparent',
    color: '#ff6666',
    border: '1px solid #ff6666',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default Header;
