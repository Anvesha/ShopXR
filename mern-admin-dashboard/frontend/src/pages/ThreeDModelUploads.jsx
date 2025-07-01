// src/pages/ThreeDModelUploads.jsx

import React, { useState, useEffect } from 'react';

const ThreeDModelUploads = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedModels, setSelectedModels] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [modelUploads, setModelUploads] = useState([]);

  const API_URL = "http://localhost:5000/api/model-uploads";

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log("✅ Models fetched:", data);
        setModelUploads(data);
      } catch (err) {
        console.error("Failed to fetch models:", err);
      }
    };
    fetchModels();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) setShowMobileFilters(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const filteredModels = modelUploads.filter(model => {
    const matchesSearch =
      model.modelName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.user?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || model.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const toggleSelect = id =>
    setSelectedModels(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );

  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      color: '#e0e0e0',
      minHeight: 'calc(100vh - 40px)',
      padding: isMobile ? '12px' : '20px',
      fontFamily: 'Poppins, sans-serif',
      borderRadius: '6px',
      border: '1px solid #333',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: isMobile ? '1.3rem' : '1.6rem', fontWeight: '600' }}>
          3D Model Uploads
        </h1>
        <p style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', color: '#b0b0b0' }}>
          View, download, and manage all 3D model files (GLB, USDZ, thumbnails).
        </p>
      </div>

      {/* Filters */}
      {isMobile && (
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          style={{
            display: 'block', padding: '8px 12px',
            backgroundColor: '#333', color: '#fff',
            border: 'none', borderRadius: '5px',
            marginBottom: '10px', width: '100%',
          }}
        >
          {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      )}

      {(showMobileFilters || !isMobile) && (
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          gap: '10px',
          marginBottom: '15px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '8px',
            flexGrow: 1
          }}>
            <input
              type="text"
              placeholder="Search models..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                padding: '8px 12px',
                backgroundColor: '#1e1e1e',
                border: '1px solid #333',
                borderRadius: '5px',
                color: '#fff',
                width: '100%',
              }}
            />
            <select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              style={{
                padding: '8px 12px',
                backgroundColor: '#1e1e1e',
                border: '1px solid #333',
                borderRadius: '5px',
                color: '#fff',
              }}
            >
              <option>All</option>
              <option>Completed</option>
              <option>Pending Upload</option>
              <option>Processing</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => alert(`Downloading ${selectedModels.length} models`)}
              style={{
                backgroundColor: '#2b8a3e',
                color: '#fff',
                padding: '8px 12px',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              ⬇ Download
            </button>
            <button
              onClick={() => alert(`Archiving ${selectedModels.length} models`)}
              style={{
                backgroundColor: '#e67700',
                color: '#fff',
                padding: '8px 12px',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              📦 Archive
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div style={{
        backgroundColor: '#181818',
        borderRadius: '6px',
        overflowX: 'auto',
        border: '1px solid #333',
      }}>
        <table style={{ width: '100%', minWidth: '1000px', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th><input
                type="checkbox"
                onChange={e => e.target.checked
                  ? setSelectedModels(filteredModels.map(m => m._id))
                  : setSelectedModels([])}
                checked={selectedModels.length === filteredModels.length && filteredModels.length > 0}
              /></th>
              <th>User</th><th>Model</th><th>Uploaded</th><th>GLB</th>
              <th>USDZ</th><th>Thumb</th><th>Status</th><th>Expires</th>
              <th>Embed Code</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredModels.length > 0 ? filteredModels.map(model => (
              <tr key={model._id}>
                <td><input
                  type="checkbox"
                  checked={selectedModels.includes(model._id)}
                  onChange={() => toggleSelect(model._id)}
                /></td>
                <td>{model.user}</td>
                <td>{model.modelName}</td>
                <td>{new Date(model.uploadDate).toISOString().split('T')[0]}</td>
                <td>
                  {model.glbFile
                    ? <a href={`/downloads/${model.glbFile}`} style={{ color: '#4dabf7' }}>{model.glbFile}</a>
                    : 'N/A'}
                </td>
                <td>
                  {model.usdzFile
                    ? <a href={`/downloads/${model.usdzFile}`} style={{ color: '#4dabf7' }}>{model.usdzFile}</a>
                    : <button onClick={() => handleUploadUsdz(model._id)}>Upload</button>}
                </td>
                <td>
                  {model.thumbnail
                    ? <img src={model.thumbnail} alt="Thumb" style={{ width: '40px', height: '40px' }}/>
                    : '🖼️'}
                </td>
                <td>
                  <span style={{
                    backgroundColor:
                      model.status === 'Completed' ? '#2b8a3e' :
                      model.status === 'Pending Upload' ? '#e67700' : '#1971c2',
                    color: '#fff',
                    padding: '2px 8px',
                    borderRadius: '10px',
                  }}>
                    {model.status}
                  </span>
                </td>
                <td>{model.expiryDate}</td>
                <td>
                  <span style={{
                    color: '#bbb',
                    maxWidth: '100px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {model.frameCode}
                  </span>
                  <button onClick={() => handleCopyFrameCode(model.frameCode)}>
                    Copy
                  </button>
                </td>
                <td>
                  <span onClick={() => handleViewDetails(model._id)}>👁️</span>
                  <span onClick={() => handleEditModel(model._id)}>✏️</span>
                  <span onClick={() => handleDeleteModel(model._id)}>🗑️</span>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="11" style={{ textAlign: 'center', padding: '20px' }}>
                  No models found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ThreeDModelUploads;
