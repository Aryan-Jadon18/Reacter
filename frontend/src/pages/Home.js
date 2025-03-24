import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import products from '../data/products';


function Home() {
  const featured = products.slice(3, 6); // show 3 featured products (can tweak)
  return (
    <div>
      <HeroBanner />

      <section style={styles.featured}>
        <h2>🔥 Featured Deals</h2>
        <div style={styles.grid}>
          {featured.map(product => (
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
