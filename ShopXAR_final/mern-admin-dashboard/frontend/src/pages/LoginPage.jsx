import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy authentication logic (replace with actual auth logic)
    if (email === 'admin@12' && password === 'password') {
      login(); // Set auth context + localStorage
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#1c1c1c',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#2a2a2a',
          padding: '30px',
          borderRadius: '10px',
          color: '#fff',
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          fontSize: '1em', // Normal font size
        }}
      >
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Admin Login</h2>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              background: '#1c1c1c',
              border: '1px solid #444',
              borderRadius: '5px',
              color: '#fff',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1em',
            }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '20px' }}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              background: '#1c1c1c',
              border: '1px solid #444',
              borderRadius: '5px',
              color: '#fff',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1em',
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            border: 'none',
            borderRadius: '5px',
            color: '#fff',
            fontWeight: 'bold',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '1em',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
