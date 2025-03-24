function HeroBanner() {
    return (
      <div style={styles.banner}>
        <h1 style={styles.title}>Mega Deals Await 🚀</h1>
        <p style={styles.subtitle}>Get up to 50% off on electronics, fashion, and more</p>
        <button style={styles.button}>Shop Now</button>
      </div>
    );
  }
  
  const styles = {
    banner: {
      backgroundImage: 'url("https://images.unsplash.com/photo-1523275335684-37898b6baf30")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '1.2rem',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#ff9900',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
  };
  
  export default HeroBanner;
  