import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import NoMatch from './pages/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/404" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

