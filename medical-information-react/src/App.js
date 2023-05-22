import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import BlogPage from './BlogPage';
import DoctorPage from './DoctorPage';
import HospitalPage from './HospitalPage';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route exact path="/" element={<BlogPage/>} />
          <Route path="/doctor" element={<DoctorPage/>} />
          <Route path="/hospital" element={<HospitalPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
