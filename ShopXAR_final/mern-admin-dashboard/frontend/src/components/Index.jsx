import React from 'react';
import Sidebar from './Sidebar'; // adjust path
import Header from './Header';   // adjust path

function Index({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <main style={{ padding: '20px' }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default Index;
