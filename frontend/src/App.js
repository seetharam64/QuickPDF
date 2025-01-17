import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import PDFViewer from './components/PDFviewer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
   <Router>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/view-pdf">View PDFs</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/view-pdf" element={<PDFViewer />} />
    </Routes>
    </Router>
  );
};

export default App;
