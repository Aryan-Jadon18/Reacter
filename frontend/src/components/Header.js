import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>🛒 Reacter</h2>
      <nav>
        <ul style={styles.nav}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/products" style={styles.link}>Products</Link></li>
          <li><Link to="/cart" style={styles.link}>Cart</Link></li>
          <li><Link to="/favorites" style={styles.link}>Favorites</Link></li>
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
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Header;
