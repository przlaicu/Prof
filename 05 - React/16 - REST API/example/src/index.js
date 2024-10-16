import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <h1>ACME User Information System</h1>
    <Routes>
      <Route path='user/:userID/details' element={<App />} />
    </Routes>
  </BrowserRouter>
);
