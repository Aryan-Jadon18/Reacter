import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import API from '../api/axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await API.get('/products');
    setProducts(res.data);
  };

  return (
    <div>
      <HeroBanner />

      <section style={styles.featured}>
        <h2>🔥 Featured Deals</h2>
        <div style={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  featured: {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#f3f3f3',
  },
  grid: {
    marginTop: '20px',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
};

export default Home;
