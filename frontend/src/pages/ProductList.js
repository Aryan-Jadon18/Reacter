import ProductCard from '../components/ProductCard';
import products from '../data/products';


function ProductList() {
  return (
    <div style={styles.container}>
      {products.map(product => (
  <ProductCard key={product.id} product={product} />
))}

    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  }
};

export default ProductList;
