import { useState } from 'react';
// import API from '../api/axios'; // will use once backend is up
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Logging in...');

    try {
      // const res = await API.post('/auth/login', form);
      // login(res.data.user);
      login({ name: 'Aryan (mock user)', email: form.email }); // mock login
      setMessage('Login successful!');
      navigate('/');
    } catch (err) {
      console.error(err);
      setMessage('Login failed.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Welcome Back 👋</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>{message}</p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  }
};

export default Login;
