import React, { useState } from 'react';
import { login } from './services/authService';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login(form);
      localStorage.setItem('token', res.token);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      alert(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#000',
      color: '#fff',
    },
    form: {
      backgroundColor: '#111',
      padding: '40px',
      borderRadius: '8px',
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #333',
      borderRadius: '4px',
      backgroundColor: '#222',
      color: '#fff',
    },
    checkboxContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    button: {
      padding: '12px',
      backgroundColor: '#fff',
      color: '#000',
      border: 'none',
      borderRadius: '4px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    link: {
      color: '#aaa',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Sign In</h2>

        <input
          name="email"
          type="email"
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your email"
          required
        />

        <input
          name="password"
          type="password"
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your password"
          required
        />

        <div style={styles.checkboxContainer}>
          <label>
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            /> Remember me
          </label>
          <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
        </div>

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p style={{ marginTop: '15px', textAlign: 'center', color: '#aaa' }}>
          Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
