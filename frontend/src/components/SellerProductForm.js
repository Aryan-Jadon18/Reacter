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
  
    // Future: Upload to Cloud if image is a File
    // if (form._imageFile) {
    //   const url = await uploadImage(form._imageFile);
    //   form.image = url;
    // }
  
    const payload = { ...form };
    delete payload._imageFile;
  
    if (product) {
      await API.put(`/products/${product.id}`, payload);
    } else {
      await API.post('/products', payload);
    }
  
    onSave();
  };
  

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>{product ? '✏️ Edit Product' : '➕ Add New Product'}</h3>
      <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="price" placeholder="Price (₹)" type="number" value={form.price} onChange={handleChange} required />
      <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];
    if (file) {
      const localUrl = URL.createObjectURL(file); // preview
      setForm({ ...form, image: localUrl, _imageFile: file }); // save raw file too
    }
  }}
/>
{form.image && (
  <img src={form.image} alt="Preview" style={{ height: '100px', marginTop: '10px', borderRadius: '6px' }} />
)}

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
