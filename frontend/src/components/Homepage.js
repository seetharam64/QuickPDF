import React from 'react';
import FileUploader from './FileUploader';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to QuickPDF</h1>
        <p>Your one-stop solution for PDF management!</p>
      </header>
      <FileUploader />
    </div>
  );
};

export default HomePage;
