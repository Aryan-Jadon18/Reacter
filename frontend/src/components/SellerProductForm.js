import { useState, useEffect } from 'react';
import API from '../api/axios';

function SellerProductForm({ product, onSave }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    accountNumber: '',
  });

  useEffect(() => {
    if (product) {
      setForm(product);
    } else {
      setForm({
        name: '',
        description: '',
        price: '',
        image: '',
        accountNumber: '',
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (product) {
      await API.put(`/products/${product.id}`, form);
    } else {
      await API.post('/products', form);
    }

    onSave();
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>{product ? '✏️ Edit Product' : '➕ Add New Product'}</h3>
      <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="price" placeholder="Price (₹)" type="number" value={form.price} onChange={handleChange} required />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <input name="accountNumber" placeholder="Account Number for Payments" value={form.accountNumber} onChange={handleChange} />

      <button type="submit" style={styles.button}>
        {product ? 'Update' : 'Create'} Product
      </button>
    </form>
  );
}

const styles = {
  form: {
    marginTop: '30px',
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px'
  },
  button: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default SellerProductForm;
