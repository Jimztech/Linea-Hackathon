import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Messages from './pages/Messages';
import Threads from './pages/Threads';
import NFT from './pages/NFT';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Sidebar />
      <div> 
        <Routes>
          <Route path="/messages" element={<Messages />} />
          <Route path="/threads" element={<Threads />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
