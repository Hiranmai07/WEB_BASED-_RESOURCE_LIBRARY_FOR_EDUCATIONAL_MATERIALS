import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import UserPanel from './components/UserPanel';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import the Home component
import './App.css';

const App = () => {
  const [resources, setResources] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar isAdmin={isAdmin} />
        <h1>Educational Resource Library</h1>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home */}
          <Route 
            path="/user" 
            element={<UserPanel resources={resources} setResources={setResources} />} 
          />
          <Route path="/admin" element={<AdminPanel resources={resources} setResources={setResources} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;