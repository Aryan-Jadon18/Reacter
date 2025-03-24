function Footer() {
    return (
      <footer style={styles.footer}>
        <div style={styles.links}>
          <a href="#about" style={styles.link}>About</a>
          <a href="#contact" style={styles.link}>Contact</a>
          <a href="#privacy" style={styles.link}>Privacy Policy</a>
          <a href="#terms" style={styles.link}>Terms</a>
        </div>
        <p style={styles.credit}>© {new Date().getFullYear()} Reacter. Built with 💙</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      backgroundColor: '#222',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      marginTop: '40px',
    },
    links: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '10px',
      flexWrap: 'wrap',
    },
    link: {
      color: '#aaa',
      textDecoration: 'none',
      fontSize: '0.9rem',
    },
    credit: {
      fontSize: '0.8rem',
      color: '#666',
    }
  };
  
  export default Footer;
  