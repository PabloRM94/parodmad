import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ background: '#1a1a1a', minHeight: '100vh' }}>
        <nav style={{
          background: '#1a1a1a',
          padding: '15px',
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '1px solid #333'
        }}>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '20px',
            margin: 0,
            padding: 0
          }}>
            <li>
              <Link 
                to="/" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#333';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/proyectos" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#333';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Experiencia
              </Link>
            </li>
            <li>
              <Link 
                to="/contacto" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#333';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
