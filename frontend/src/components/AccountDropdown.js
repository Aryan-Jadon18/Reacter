import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

function AccountDropdown() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  console.log("🔎 AuthContext user:", user);

  const toggleDropdown = () => setOpen(prev => !prev);

  const becomeSeller = async () => {
    try {
      const res = await API.put('/auth/become-seller');
      alert(res.data.message);
      window.location.reload(); // fetches updated role from /auth/me
    } catch (err) {
      alert('Error becoming seller');
    }
  };

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <button onClick={toggleDropdown} style={styles.iconBtn}>
        <Menu size={22} />
      </button>

      {open && (
        <div style={styles.dropdown}>
          <p><strong>{user.name}</strong></p>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>{user.email}</p>
          <p>Role: <strong>{user.role}</strong></p>

          {user.role === 'buyer' ? (
            <button onClick={becomeSeller} style={styles.button}>Become a Seller</button>
          ) : (
            <button onClick={() => navigate('/seller/dashboard')} style={styles.button}>
              Go to Seller Dashboard
            </button>
          )}

          <button onClick={logout} style={styles.logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  iconBtn: {
    background: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '6px'
  },
  dropdown: {
    position: 'absolute',
    top: '40px',
    right: 0,
    width: '220px',
    backgroundColor: '#fff',
    color: '#222',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    zIndex: 1000,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  button: {
    marginTop: '10px',
    width: '100%',
    padding: '8px',
    backgroundColor: '#222',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  logout: {
    marginTop: '10px',
    width: '100%',
    padding: '8px',
    backgroundColor: '#ff4444',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default AccountDropdown;
