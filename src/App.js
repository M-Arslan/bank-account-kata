import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';

const App = () => {
  return (
    <div className="app px-10">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
