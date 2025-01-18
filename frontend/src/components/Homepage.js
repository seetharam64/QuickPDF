import React from 'react';
import FileUploader from './FileUploader';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <h1>Welcome to QuickPDF</h1>
        <p>Your all-in-one solution for managing PDF files.</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="about-section">
        <h2>About QuickPDF</h2>
        <p>
          QuickPDF is your one-stop solution for managing PDF files effortlessly. 
          Our tools help you view, convert, compress, and merge PDFs with ease.
        </p>
      </section>
      <section className="features-section">
        <div className="features">
          <div className="feature-card">
            <h3>View PDFs</h3>
            <p>Open and read your PDF files seamlessly.</p>
            <button>Go to Viewer</button>
          </div>
          <div className="feature-card">
            <h3>Convert PDFs</h3>
            <p>Convert PDFs to Word, Images, or Text, and vice versa.</p>
            <button>Convert Now</button>
          </div>
          <div className="feature-card">
            <h3>Compress PDFs</h3>
            <p>Reduce file size without compromising quality.</p>
            <button>Compress</button>
          </div>
          <div className="feature-card">
            <h3>Merge PDFs</h3>
            <p>Combine multiple PDFs into one document.</p>
            <button>Merge</button>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2025 QuickPDF. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
