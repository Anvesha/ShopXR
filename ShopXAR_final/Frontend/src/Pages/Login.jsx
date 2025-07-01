import React, { useState, useContext } from 'react';
import { login } from './services/authService';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Login() {
  const { setUser } = useContext(UserContext);
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.email.trim() || !form.password.trim()) {
      setError('Email and password are required.');
      return;
    }
    setLoading(true);
    try {
      const res = await login(form);
      localStorage.setItem('token', res.token);
      setUser({ token: res.token }); // Save token in context
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed');
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
      padding: '0 15px',
    },
    form: {
      backgroundColor: '#111',
      padding: '40px',
      borderRadius: '8px',
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 0 10px rgba(255,255,255,0.1)',
    },
    label: {
      marginBottom: '6px',
      fontSize: '0.9rem',
      color: '#ccc',
      display: 'block',
    },
    input: {
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #333',
      borderRadius: '4px',
      backgroundColor: '#222',
      color: '#fff',
      fontSize: '1rem',
      width: '100%',
    },
    checkboxContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      fontSize: '0.9rem',
      color: '#ccc',
    },
    button: {
      padding: '12px',
      backgroundColor: '#fff',
      color: '#000',
      border: 'none',
      borderRadius: '4px',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    link: {
      color: '#aaa',
      textDecoration: 'none',
    },
    error: {
      color: '#f55',
      marginBottom: '15px',
      textAlign: 'center',
    },
    togglePassword: {
      position: 'absolute',
      right: '15px',
      top: '38px',
      cursor: 'pointer',
      userSelect: 'none',
      color: '#888',
      fontSize: '0.9rem',
      background: 'none',
      border: 'none',
    },
    passwordWrapper: {
      position: 'relative',
      marginBottom: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Sign In</h2>

        {error && <div style={styles.error}>{error}</div>}

        <label htmlFor="email" style={styles.label}>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your email"
          required
          autoComplete="email"
          disabled={loading}
        />

        <label htmlFor="password" style={styles.label}>Password</label>
        <div style={styles.passwordWrapper}>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your password"
            required
            autoComplete="current-password"
            disabled={loading}
          />
          <button
            type="button"
            onClick={() => setShowPassword((show) => !show)}
            style={styles.togglePassword}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <div style={styles.checkboxContainer}>
          <label>
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              disabled={loading}
            />{' '}
            Remember me
          </label>
          <Link to="/forgot-password" style={styles.link}>Forgot Password?</Link>
        </div>

        <button
          type="submit"
          style={styles.button}
          disabled={loading || !form.email || !form.password}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p style={{ marginTop: '15px', textAlign: 'center', color: '#aaa' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={styles.link}>Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
