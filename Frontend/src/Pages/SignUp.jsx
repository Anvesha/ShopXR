import React, { useState } from 'react';
import { register } from '../Pages/services/authService'; // Confirm path is correct

function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(false);

  // Update form state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('❗ Passwords do not match!');
      return;
    }

    setLoading(true);

    try {
      const { name, email, mobile, password } = form;

      // Debug: log form data before sending
      console.log('Submitting registration:', { name, email, mobile, password });

      const res = await register({ name, email, mobile, password });

      if (res?.token) {
        // Save token to localStorage
        localStorage.setItem('token', res.token);
        alert('✅ Registered successfully!');

        // Reset form fields after successful registration
        setForm({
          name: '',
          email: '',
          mobile: '',
          password: '',
          confirmPassword: ''
        });
      } else {
        throw new Error('No token received from server');
      }
    } catch (err) {
      console.error('❌ Registration error:', err);

      // Graceful error message display
      alert(err?.response?.data?.message || err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  // Inline styles for black & white responsive theme
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      minHeight: '100vh',
      backgroundColor: '#000',
      fontFamily: 'Arial, sans-serif',
    },
    form: {
      backgroundColor: '#111',
      padding: '30px 25px',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '400px',
      color: '#fff',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '25px',
      fontSize: '24px',
      color: '#fff',
    },
    input: {
      padding: '12px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #333',
      backgroundColor: '#222',
      color: '#fff',
      fontSize: '14px',
      width: '100%',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#fff',
    },
    button: {
      padding: '12px',
      backgroundColor: loading ? '#999' : '#fff',
      color: loading ? '#666' : '#000',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '5px',
      cursor: loading ? 'not-allowed' : 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Sign Up</h2>

        <input
          name="name"
          onChange={handleChange}
          value={form.name}
          placeholder="Name"
          required
          style={styles.input}
          autoComplete="name"
        />
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={form.email}
          placeholder="Email"
          required
          style={styles.input}
          autoComplete="email"
        />
        <input
          name="mobile"
          type="tel"
          onChange={handleChange}
          value={form.mobile}
          placeholder="Mobile Number"
          required
          pattern="[0-9]{10}"
          title="Enter a 10-digit mobile number"
          style={styles.input}
          autoComplete="tel"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={form.password}
          placeholder="Password"
          required
          style={styles.input}
          autoComplete="new-password"
        />
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={form.confirmPassword}
          placeholder="Confirm Password"
          required
          style={styles.input}
          autoComplete="new-password"
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
