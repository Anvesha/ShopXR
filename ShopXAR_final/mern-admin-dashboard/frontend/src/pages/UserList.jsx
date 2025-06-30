// src/pages/UserList.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const usersPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/api/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('Failed to fetch users.');
        setLoading(false);
      });
  }, []);

  const isMobile = windowWidth <= 768;

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const containerStyle = {
    backgroundColor: '#1a1a1a',
    color: '#e0e0e0',
    minHeight: 'calc(100vh - 40px)',
    padding: '20px',
    fontFamily: 'Poppins, sans-serif',
    borderRadius: '6px',
    border: '1px solid #333',
  };

  const tableContainerStyle = {
    backgroundColor: '#181818',
    borderRadius: '6px',
    overflowX: 'auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    border: '1px solid #333',
    marginTop: '20px',
  };

  const tableStyle = {
    width: '100%',
    minWidth: '900px',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: '#3a3a3a',
    padding: '10px 12px',
    textAlign: 'left',
    fontWeight: 'bold',
    borderBottom: '1px solid #444',
    fontSize: '0.88em',
    whiteSpace: 'nowrap',
  };

  const tdStyle = {
    padding: '10px 12px',
    borderBottom: '1px solid #333',
    fontSize: '0.85em',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  };

  const viewBtnStyle = {
    background: '#444',
    color: '#fff',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '0.8em',
  };

  return (
    <div style={containerStyle}>
      <h1>All Users</h1>
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          padding: '8px',
          width: isMobile ? '100%' : '250px',
          margin: '10px 0',
          background: '#2a2a2a',
          border: '1px solid #444',
          color: '#eee',
          borderRadius: '4px',
        }}
      />

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Plan</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Videos</th>
                <th style={thStyle}>Models</th>
                <th style={thStyle}>Shopify</th>
                <th style={thStyle}>Last Active</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user._id}>
                  <td style={tdStyle}>{user.name}</td>
                  <td style={tdStyle}>{user.email}</td>
                  <td style={tdStyle}>{user.plan || '-'}</td>
                  <td style={tdStyle}>{user.status || '-'}</td>
                  <td style={tdStyle}>{user.videos || 0}</td>
                  <td style={tdStyle}>{user.models || 0}</td>
                  <td style={tdStyle}>{user.shopify ? '✅' : '❌'}</td>
                  <td style={tdStyle}>
                    {user.lastActive ? new Date(user.lastActive).toLocaleString() : '-'}
                  </td>
                  <td style={tdStyle}>
                    <button
                      style={viewBtnStyle}
                      onClick={() =>
                        navigate(`/userprofile/${encodeURIComponent(user.email)}`)
                      }
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && filteredUsers.length > 0 && (
        <div style={{ marginTop: '15px' }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ marginRight: '8px' }}
          >
            Prev
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{ marginLeft: '8px' }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UserList;
