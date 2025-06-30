import React, { useState } from 'react';

const SecuritySettings = () => {
  const [force2FA, setForce2FA] = useState(false);
  const [ipWhitelist, setIpWhitelist] = useState('');
  const [ssoUrl, setSsoUrl] = useState('');
  const [certificate, setCertificate] = useState(null);

  const handleFileChange = (e) => {
    setCertificate(e.target.files[0]);
  };

  const handleSave = () => {
    console.log('Settings Saved:', {
      force2FA,
      ipWhitelist,
      ssoUrl,
      certificate
    });
    alert('Security settings saved!');
  };

  return (
    <div style={{
      backgroundColor: '#18181b',
      padding: '20px',
      borderRadius: '12px',
      width: '100%',
      color: '#fff',
      border: '1px solid #3f3f46',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '5px' }}>Security Settings</h2>
      <p style={{ fontSize: '12px', color: '#a1a1aa', marginBottom: '15px' }}>
        Configure security policies and access controls.
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <div>
          <p style={{ fontWeight: '500', fontSize: '14px' }}>Force 2FA for all admins</p>
          <p style={{ fontSize: '11px', color: '#a1a1aa' }}>
            Require two-factor authentication for admin accounts
          </p>
        </div>
        <label style={{ position: 'relative', display: 'inline-block', width: '40px', height: '20px' }}>
          <input
            type="checkbox"
            checked={force2FA}
            onChange={() => setForce2FA(!force2FA)}
            style={{ opacity: 0, width: 0, height: 0 }}
          />
          <span style={{
            position: 'absolute',
            cursor: 'pointer',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: force2FA ? '#22c55e' : '#52525b',
            borderRadius: '20px',
            transition: '0.4s'
          }}></span>
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '13px', marginBottom: '5px', display: 'block' }}>IP Whitelist</label>
        <textarea
          value={ipWhitelist}
          onChange={(e) => setIpWhitelist(e.target.value)}
          placeholder="Enter CIDR blocks (e.g., 192.168.10.0/24)"
          rows={3}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '5px',
            backgroundColor: '#27272a',
            border: '1px solid #3f3f46',
            color: '#fff',
            fontSize: '12px',
            boxSizing: 'border-box'
          }}
        />
        <p style={{ fontSize: '11px', color: '#a1a1aa', marginTop: '5px' }}>
          Only allow admin login from these IP addresses
        </p>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '13px', marginBottom: '5px', display: 'block' }}>Identity Provider URL</label>
          <input
            type="text"
            value={ssoUrl}
            onChange={(e) => setSsoUrl(e.target.value)}
            placeholder="https://your-idp.com/saml"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              backgroundColor: '#27272a',
              border: '1px solid #3f3f46',
              color: '#fff',
              fontSize: '12px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '13px', marginBottom: '5px', display: 'block' }}>Certificate</label>
          <input
            type="file"
            onChange={handleFileChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              backgroundColor: '#27272a',
              border: '1px solid #3f3f46',
              color: '#fff',
              fontSize: '12px',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        style={{
          width: '30%',
          padding: '12px',
          backgroundColor: '#fff',
          color: '#000',
          border: 'none',
          borderRadius: '5px',
          fontWeight: '600',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        Save Security Settings
      </button>
    </div>
  );
};

export default SecuritySettings;
