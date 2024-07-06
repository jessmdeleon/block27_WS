import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import FAQ from './components/FAQ';
import data from './data.json';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} />
      <main style={{ marginLeft: sidebarOpen ? 240 : 0, padding: 20 }}>
        <Routes>
          <Route path="/" element={<Dashboard data={data} />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
