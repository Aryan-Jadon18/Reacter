import { useEffect, useState } from 'react';
import API from '../api/axios';
import SellerProductForm from '../components/SellerProductForm';
import SellerProductCard from '../components/SellerProductCard';

function SellerDashboard() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await API.get('/products/my-products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSave = () => {
    fetchProducts();
    setEditingProduct(null);
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>📦 Your Products</h2>

      <SellerProductForm onSave={handleSave} product={editingProduct} />

      <div style={styles.grid}>
        {products.map(p => (
          <SellerProductCard
            key={p.id}
            product={p}
            onEdit={() => setEditingProduct(p)}
            onDelete={fetchProducts}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    marginTop: '20px',
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  }
};

export default SellerDashboard;
