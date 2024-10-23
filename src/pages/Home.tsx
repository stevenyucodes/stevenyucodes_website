// src/components/HomePage.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <h1>
      Welcome to My Portfolio</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;
