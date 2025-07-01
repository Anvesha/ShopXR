// src/pages/VideoRequests.jsx
import React, { useState } from 'react';

const VideoRequests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterFiles, setFilterFiles] = useState('All Files');
  const [sortOrder, setSortOrder] = useState('Newest First');
  const [selectedRequests, setSelectedRequests] = useState([]);
  const [viewingDetails, setViewingDetails] = useState(null); // State to manage detailed view

  const [videoRequests, setVideoRequests] = useState([
    {
      id: 'v1',
      user: 'John Doe',
      modelName: 'Product Showcase Ring',
      requirements: {
        size: '20x15x10 cm',
        format: '.mp4',
        details: 'Silver ring with diamond, high ...',
      },
      videoFile: 'Ring_showcase.mp4',
      uploadTime: '2025-01-15 10:30',
      duration: '00:02:15',
      size: '125 MB',
      status: 'Pending',
      filesStatus: 'Missing',
      modelId: null, // No model generated yet
    },
    {
      id: 'v2',
      user: 'Jane Smith',
      modelName: 'Acme Logo Keychain',
      requirements: {
        size: '5x5x2 cm',
        format: '.mp4',
        details: 'Include ACME text on top, sa ...',
      },
      videoFile: 'Dacme_keychain.mp4',
      uploadTime: '2025-01-14 16:20',
      duration: '00:01:45',
      size: '125 MB',
      status: 'Completed',
      filesStatus: 'Completed',
      modelId: 'm123', // Example model ID
      embedCode: `
        <div style="position: relative; width: 100%; padding-top: 75%; overflow: hidden;">
          <iframe
            src="https://threedlframerk.onrender.com/embed/681c9e7d375fa667fa2392e4"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            frameborder="0" allowfullscreen>
          </iframe>
        </div>
      `, // Example embed code
      glbFile: true, // Indicates GLB file exists
      usdzFile: true, // Indicates USDZ file exists
    },
    {
      id: 'v3',
      user: 'Bob Johnson',
      modelName: 'Furniture Display',
      requirements: {
        size: 'Large',
        format: '.mp4',
        details: 'Living room set, realistic textures',
      },
      videoFile: 'furniture.mp4',
      uploadTime: '2025-01-13 11:00',
      duration: '00:03:00',
      size: '300 MB',
      status: 'In Progress',
      filesStatus: 'Missing',
      modelId: null,
    },
  ]);

  const containerStyle = {
    backgroundColor: '#1a1a1a',
    color: '#e0e0e0',
    minHeight: 'calc(100vh - 40px)',
    padding: '20px',
    fontFamily: "'Poppins', sans-serif",
    borderRadius: '6px',
    border: '1px solid #333',
  };

  const headerStyle = {
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '1.6em', // ~25.6px
    marginBottom: '5px',
  };

  const subtitleStyle = {
    fontSize: '0.9em', // ~14.4px
    color: '#b0b0b0',
  };

  const overviewCardsContainerStyle = {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  };

  const overviewCardStyle = {
    flex: '1',
    minWidth: '150px',
    backgroundColor: '#2a2a2a',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    border: '1px solid #333',
    cursor: 'pointer',
    transition: 'background-color 0.2s, border-color 0.2s',
  };

  const cardTitleStyle = {
    fontSize: '0.9em',
    color: '#b0b0b0',
    marginBottom: '5px',
  };

  const cardValueStyle = {
    fontSize: '1.8em',
    fontWeight: 'bold',
    color: '#fff',
  };

  const filtersActionsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
    flexWrap: 'wrap',
    gap: '10px',
  };

  const searchFilterGroupStyle = {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  };

  const inputStyle = {
    width: '200px',
    padding: '7px 10px',
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '0.88em', // ~14px
  };

  const selectStyle = {
    ...inputStyle,
    width: 'auto',
    padding: '7px 10px',
    appearance: 'none',
    backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23e0e0e0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    backgroundSize: '14px',
  };

  const actionButtonStyle = {
    padding: '7px 12px',
    backgroundColor: '#4a4a4a',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.88em', // ~14px
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    transition: 'background-color 0.2s',
  };

  const tableContainerStyle = {
    backgroundColor: '#181818',
    borderRadius: '6px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    border: '1px solid #333',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: '#3a3a3a',
    padding: '10px 12px',
    textAlign: 'left',
    fontWeight: 'bold',
    borderBottom: '1px solid #444',
    fontSize: '0.88em', // ~14px
  };

  const tdStyle = {
    padding: '10px 12px',
    borderBottom: '1px solid #333',
    fontSize: '0.85em', // ~13.6px
    verticalAlign: 'middle',
  };

  const checkboxStyle = {
    marginRight: '8px',
    transform: 'scale(1.1)',
  };

  const statusBadgeStyle = (status) => {
    let bgColor = '#4a4a4a';
    let textColor = '#fff';
    if (status === 'Completed') {
      bgColor = '#28a745'; // Green
    } else if (status === 'Pending') {
      bgColor = '#ffc107'; // Yellow
      textColor = '#333';
    } else if (status === 'In Progress') {
      bgColor = '#007bff'; // Blue
    }
    return {
      backgroundColor: bgColor,
      color: textColor,
      padding: '3px 6px',
      borderRadius: '3px',
      fontSize: '0.75em', // ~12px
      fontWeight: 'bold',
    };
  };

  const filesStatusBadgeStyle = (status) => {
    let bgColor = '#4a4a4a';
    let textColor = '#fff';
    if (status === 'Completed') {
      bgColor = '#28a745'; // Green
    } else if (status === 'Missing') {
      bgColor = '#dc3545'; // Red
    }
    return {
      backgroundColor: bgColor,
      color: textColor,
      padding: '3px 6px',
      borderRadius: '3px',
      fontSize: '0.75em', // ~12px
      fontWeight: 'bold',
    };
  };

  const downloadIconStyle = {
    fontSize: '1.2em', // ~19.2px
    color: '#bbb',
    cursor: 'pointer',
  };

  const viewDetailsButtonStyle = {
    backgroundColor: '#5a5a5a',
    color: '#ffffff',
    padding: '6px 10px',
    borderRadius: '3px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.8em', // ~12.8px
  };

  // Detailed View Styles (new)
  const detailViewContainerStyle = {
    display: 'flex',
    backgroundColor: '#181818',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    border: '1px solid #333',
    marginTop: '20px',
    minHeight: '600px',
  };

  const embedCodeSectionStyle = {
    flex: '2',
    padding: '30px',
    borderRight: '1px solid #282828',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const sectionHeaderDetailStyle = {
    fontSize: '1.2em', // ~19.2px
    marginBottom: '10px',
    color: '#fff',
  };

  const embedCodeBlockStyle = {
    backgroundColor: '#0d0d0d',
    borderRadius: '6px',
    padding: '15px',
    fontFamily: 'monospace',
    fontSize: '0.85em',
    color: '#00ff00', // Green text for code
    position: 'relative',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
    maxHeight: '250px',
    overflowY: 'auto',
    border: '1px solid #222',
  };

  const copyButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '8px 12px',
    backgroundColor: '#4a4a4a',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.8em',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  };

  const previewEmbedButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4a4a4a',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    marginTop: '10px',
  };

  const howToUseListStyle = {
    listStyleType: 'decimal',
    paddingLeft: '20px',
    fontSize: '0.9em', // ~14.4px
    color: '#ccc',
  };

  const howToUseListItemStyle = {
    marginBottom: '8px',
  };

  const requestDetailsSidebarStyle = {
    flex: '1',
    backgroundColor: '#121212',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const detailItemStyle = {
    marginBottom: '10px',
  };

  const detailLabelStyle = {
    display: 'block',
    fontWeight: 'bold',
    fontSize: '0.9em', // ~14.4px
    color: '#bbb',
    marginBottom: '5px',
  };

  const detailValueStyle = {
    fontSize: '0.95em', // ~15.2px
    color: '#e0e0e0',
  };

  const fileCheckStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.95em',
    color: '#e0e0e0',
    marginBottom: '5px',
  };

  const fileCheckIconStyle = (checked) => ({
    color: checked ? '#28a745' : '#dc3545',
    fontSize: '1.2em',
  });

  const actionButtonDetailStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '0.9em',
    fontWeight: 'bold',
    marginTop: '10px',
    transition: 'background-color 0.2s',
  };

  const deleteModalButtonStyle = {
    ...actionButtonDetailStyle,
    backgroundColor: '#dc3545', // Red
    color: '#fff',
  };

  const backToDashboardButtonStyle = {
    ...actionButtonDetailStyle,
    backgroundColor: '#2a2a2a', // Darker gray
    color: '#fff',
  };

  // Handlers
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRequests(filteredRequests.map(req => req.id));
    } else {
      setSelectedRequests([]);
    }
  };

  const handleSelectRequest = (id) => {
    setSelectedRequests(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(reqId => reqId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDownloadSelected = () => {
    if (selectedRequests.length > 0) {
      alert(`Downloading selected video requests: ${selectedRequests.join(', ')}`);
    } else {
      alert('No video requests selected for download.');
    }
  };

  const handleApproveSelected = () => {
    if (selectedRequests.length > 0) {
      alert(`Approving selected video requests: ${selectedRequests.join(', ')}`);
    } else {
      alert('No video requests selected for approval.');
    }
  };

  const handleExport = () => {
    alert('Exporting video request data...');
  };

  const handleDownloadVideo = (videoFileName) => {
    if (videoFileName) {
      alert(`Downloading video: ${videoFileName}`);
      // In a real app, you'd trigger a file download here
    } else {
      alert('No video file available for download.');
    }
  };

  const handleViewDetails = (request) => {
    setViewingDetails(request);
  };

  const handleBackToList = () => {
    setViewingDetails(null);
  };

  const handleCopyEmbedCode = (code) => {
    navigator.clipboard.writeText(code.trim())
      .then(() => alert('Embed code copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err));
  };

  const handleDeleteModal = () => {
    if (window.confirm(`Are you sure you want to delete the model for request "${viewingDetails.modelName}"?`)) {
      alert(`Model for request ${viewingDetails.id} deleted.`);
      // In a real app, you'd make an API call to delete the model
      setViewingDetails(null); // Go back to list after deletion
    }
  };

  const handlePreviewEmbed = () => {
    alert('Opening embed preview in a new tab (simulated).');
    // In a real app, you'd open a new window/tab with the embed code content
  };


  const filteredRequests = videoRequests
    .filter(req => {
      const matchesSearch =
        req.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        req.modelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        req.requirements.details.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'All' || req.status === filterStatus;
      const matchesFiles = filterFiles === 'All Files' ||
                           (filterFiles === 'Missing' && req.filesStatus === 'Missing') ||
                           (filterFiles === 'Completed' && req.filesStatus === 'Completed');
      return matchesSearch && matchesStatus && matchesFiles;
    })
    .sort((a, b) => {
      if (sortOrder === 'Newest First') {
        return new Date(b.uploadTime) - new Date(a.uploadTime);
      }
      return new Date(a.uploadTime) - new Date(b.uploadTime); // Oldest First
    });

  const totalRequests = videoRequests.length;
  const pendingRequests = videoRequests.filter(req => req.status === 'Pending').length;
  const inProgressRequests = videoRequests.filter(req => req.status === 'In Progress').length;
  const completedRequests = videoRequests.filter(req => req.status === 'Completed').length;

  if (viewingDetails) {
    return (
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>Video Request Details</h1>
          <p style={subtitleStyle}>Details for request: "{viewingDetails.modelName}"</p>
        </div>

        <div style={detailViewContainerStyle}>
          <div style={embedCodeSectionStyle}>
            <h2 style={sectionHeaderDetailStyle}>Your Embed Code</h2>
            <p style={{ fontSize: '0.85em', color: '#ccc', marginBottom: '10px' }}>
              Copy and paste this code into your website's HTML to display your 3D model with AR capabilities. The iframe will load our model viewer with your 3D model already configured.
            </p>

            <div style={{ position: 'relative' }}>
              <div style={embedCodeBlockStyle}>
                {viewingDetails.embedCode ? viewingDetails.embedCode.trim() : 'No embed code available for this request yet.'}
              </div>
              {viewingDetails.embedCode && (
                <button style={copyButtonStyle} onClick={() => handleCopyEmbedCode(viewingDetails.embedCode)}>
                  Copy
                </button>
              )}
            </div>

            <button style={previewEmbedButtonStyle} onClick={handlePreviewEmbed}>
              Preview Embed
            </button>
            <p style={{ fontSize: '0.8em', color: '#aaa', marginTop: '10px' }}>
              Preview: The code will create an iframe that loads your 3D model.
            </p>

            <h3 style={{ fontSize: '1.2em', color: '#fff', marginTop: '30px', marginBottom: '15px' }}>How to Use</h3>
            <ol style={howToUseListStyle}>
              <li style={howToUseListItemStyle}>Copy the embed code above</li>
              <li style={howToUseListItemStyle}>Paste it into your website's HTML where you want the 3D model to appear</li>
              <li style={howToUseListItemStyle}>The iframe will load our specialized 3D model viewer with your model pre-configured</li>
              <li style={howToUseListItemStyle}>Users on compatible devices will be able to view the model in AR by clicking the AR button</li>
              <li style={howToUseListItemStyle}>The model is served from our high-speed CloudFront CDN for optimal performance</li>
            </ol>
          </div>

          <div style={requestDetailsSidebarStyle}>
            <h2 style={sectionHeaderDetailStyle}>Request Details</h2>
            <div style={detailItemStyle}>
              <span style={detailLabelStyle}>Title</span>
              <span style={detailValueStyle}>{viewingDetails.modelName}</span>
            </div>
            <div style={detailItemStyle}>
              <span style={detailLabelStyle}>Status</span>
              <span style={statusBadgeStyle(viewingDetails.status)}>{viewingDetails.status}</span>
            </div>
            <div style={detailItemStyle}>
              <span style={detailLabelStyle}>Model Files</span>
              <div style={fileCheckStyle}>
                <span style={fileCheckIconStyle(viewingDetails.glbFile)}>
                  {viewingDetails.glbFile ? '✅' : '❌'}
                </span>
                GLB File
              </div>
              <div style={fileCheckStyle}>
                <span style={fileCheckIconStyle(viewingDetails.usdzFile)}>
                  {viewingDetails.usdzFile ? '✅' : '❌'}
                </span>
                USDZ File
              </div>
            </div>

            <button style={deleteModalButtonStyle} onClick={handleDeleteModal}>
              DELETE MODAL
            </button>
            <button style={backToDashboardButtonStyle} onClick={handleBackToList}>
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main list view
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Video Requests ( All Users )</h1>
        <p style={subtitleStyle}>
          Review every video submitted for 3D modeling. Approve, download, or upload 3D files directly.
        </p>
      </div>

      <div style={overviewCardsContainerStyle}>
        <div style={overviewCardStyle}>
          <div style={cardTitleStyle}>Total Requests</div>
          <div style={cardValueStyle}>{totalRequests}</div>
        </div>
        <div style={overviewCardStyle}>
          <div style={cardTitleStyle}>Pending</div>
          <div style={cardValueStyle}>{pendingRequests}</div>
        </div>
        <div style={overviewCardStyle}>
          <div style={cardTitleStyle}>In Progress</div>
          <div style={cardValueStyle}>{inProgressRequests}</div>
        </div>
        <div style={overviewCardStyle}>
          <div style={cardTitleStyle}>Completed</div>
          <div style={cardValueStyle}>{completedRequests}</div>
        </div>
      </div>

      <div style={filtersActionsContainerStyle}>
        <div style={searchFilterGroupStyle}>
          <input
            type="text"
            placeholder="Search by user name"
            style={inputStyle}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            style={selectStyle}
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <select
            style={selectStyle}
            value={filterFiles}
            onChange={(e) => setFilterFiles(e.target.value)}
          >
            <option value="All Files">All Files</option>
            <option value="Completed">Completed</option>
            <option value="Missing">Missing</option>
          </select>
          <select
            style={selectStyle}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="Newest First">Newest First</option>
            <option value="Oldest First">Oldest First</option>
          </select>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={actionButtonStyle} onClick={handleDownloadSelected}>
            <span role="img" aria-label="download">⬇️</span> Download Selected
          </button>
          <button style={actionButtonStyle} onClick={handleApproveSelected}>
            <span role="img" aria-label="approve">✅</span> Approve Selected
          </button>
          <button style={actionButtonStyle} onClick={handleExport}>
            <span role="img" aria-label="export">📤</span> Export
          </button>
        </div>
      </div>

      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...thStyle, width: '30px' }}>
                <input
                  type="checkbox"
                  style={checkboxStyle}
                  onChange={handleSelectAll}
                  checked={selectedRequests.length === filteredRequests.length && filteredRequests.length > 0}
                />
              </th>
              <th style={thStyle}>User</th>
              <th style={thStyle}>Model Name</th>
              <th style={thStyle}>Requirements</th>
              <th style={thStyle}>Video</th>
              <th style={thStyle}>Upload Time</th>
              <th style={thStyle}>Duration</th>
              <th style={thStyle}>Size</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Files</th>
              <th style={thStyle}>Download Video</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.length > 0 ? (
              filteredRequests.map((request) => (
                <tr key={request.id}>
                  <td style={tdStyle}>
                    <input
                      type="checkbox"
                      style={checkboxStyle}
                      checked={selectedRequests.includes(request.id)}
                      onChange={() => handleSelectRequest(request.id)}
                    />
                  </td>
                  <td style={tdStyle}>{request.user}</td>
                  <td style={tdStyle}>{request.modelName}</td>
                  <td style={tdStyle}>
                    <div>Size : {request.requirements.size}</div>
                    <div>Format : {request.requirements.format}</div>
                    <div style={{fontSize: '0.75em', color: '#999', maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                      {request.requirements.details}
                    </div>
                  </td>
                  <td style={{...tdStyle, maxWidth: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{request.videoFile}</td>
                  <td style={tdStyle}>{request.uploadTime}</td>
                  <td style={tdStyle}>{request.duration}</td>
                  <td style={tdStyle}>{request.size}</td>
                  <td style={tdStyle}>
                    <span style={statusBadgeStyle(request.status)}>{request.status}</span>
                  </td>
                  <td style={tdStyle}>
                    <span style={filesStatusBadgeStyle(request.filesStatus)}>{request.filesStatus}</span>
                  </td>
                  <td style={tdStyle}>
                    {request.videoFile && (
                      <span
                        style={downloadIconStyle}
                        role="img"
                        aria-label="download video"
                        onClick={() => handleDownloadVideo(request.videoFile)}
                      >
                        ⬇️
                      </span>
                    )}
                  </td>
                  <td style={tdStyle}>
                    <button
                      style={viewDetailsButtonStyle}
                      onClick={() => handleViewDetails(request)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" style={{ ...tdStyle, textAlign: 'center', padding: '15px' }}>
                  No video requests found for the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VideoRequests;