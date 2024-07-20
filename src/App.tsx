import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AdiForm from './components/AdiForm';
import EmpForm from './components/EmpForm';
import CoreCapabilities from './components/CoreCapabilities';



const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CoreCapabilities />} />  // Default route
          <Route path="/employee-info" element={<EmpForm />} />  // Route for employee-info
          <Route path="/core-capabilities" element={<CoreCapabilities />} />
          <Route path="/competency-tracking" element={<AdiForm />} />
          <Route path="/emp-form" element={<EmpForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
