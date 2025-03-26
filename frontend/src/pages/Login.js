import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';

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
      // Step 1: Login and get token
      const res = await API.post('/auth/login', form);
      const { token } = res.data;
      localStorage.setItem('token', token);

      // Step 2: Fetch full user info including role
      const me = await API.get('/auth/me');
      console.log('Logged in user:', me.data); // ✅ Optional debug

      // Step 3: Save in context
      login(me.data);

      setMessage('Login successful!');
      navigate('/');
    } catch (err) {
      console.error(err);
      setMessage('Invalid credentials');
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
