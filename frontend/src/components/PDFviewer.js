import React, { useState } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

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
    <div>
      <h2>PDF Viewer</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      {pdfFile && (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
          <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      )}
    </div>
  );
};

export default PDFViewer;
