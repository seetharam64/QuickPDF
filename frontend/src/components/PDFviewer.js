import React, { useState } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import './PDFviewer.css';

const PDFViewer = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setPdfFile(e.target.result);
      };
      fileReader.readAsDataURL(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="pdf-viewer">
      <h2 className="pdf-viewer-title">PDF Viewer</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} className="pdf-viewer-input"/>
      {pdfFile && (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      )}
    </div>
  );
};

export default PDFViewer;
