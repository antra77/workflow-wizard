import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { registerLicense } from '@syncfusion/ej2-base';

const licenseKey = import.meta.env.VITE_LICENSE_KEY;
if (licenseKey) {
  registerLicense(licenseKey);
} else {
  console.error('License key is not defined in .env');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
