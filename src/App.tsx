import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Layout from './components/Layout';

// Pages
import HomePage from './pages/HomePage';
import FinancialServices from './pages/FinancialServices';
import Schedule from './pages/Schedule';

// Placeholder pages
const OurTeam = () => <div style={{ marginTop: '100px', padding: '50px', textAlign: 'center' }}>Our Team Page</div>;
const Media = () => <div style={{ marginTop: '100px', padding: '50px', textAlign: 'center' }}>Media Page</div>;
const Events = () => <div style={{ marginTop: '100px', padding: '50px', textAlign: 'center' }}>Events Page</div>;
const Privacy = () => <div style={{ marginTop: '100px', padding: '50px', textAlign: 'center' }}>Privacy Policy</div>;
const Terms = () => <div style={{ marginTop: '100px', padding: '50px', textAlign: 'center' }}>Terms of Use</div>;
const Disclosure = () => <div style={{ marginTop: '100px', padding: '50px', textAlign: 'center' }}>Full Disclosure</div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/financial-services" element={<FinancialServices />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/media" element={<Media />} />
          <Route path="/events" element={<Events />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclosure" element={<Disclosure />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
