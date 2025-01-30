import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightTable from './components/FlightTable';
import FlightDetail from './components/FlightDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlightTable />} />
        <Route path="/flight/:id" element={<FlightDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
