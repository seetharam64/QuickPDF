import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import PDFViewer from './components/PDFviewer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
   <Router>
     <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/view-pdf">View PDFs</a></li>
          <li><a href="/convert-pdf">Convert PDFs</a></li>
          <li><a href="/compress-pdf">Compress PDFs</a></li>
          <li><a href="/merge-pdf">Merge PDFs</a></li>
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
