import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-panel" style={{
      position: 'fixed',
      top: '1rem',
      left: '1rem',
      right: '1rem',
      zIndex: 50,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--primary-blue)' }}>
        <GraduationCap size={28} />
        <span>AcademicChain</span>
      </Link>

      <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <style>{`
          @media (max-width: 768px) {
            .desktop-menu { display: none !important; }
            .mobile-menu-btn { display: block !important; }
          }
          @media (min-width: 769px) {
            .mobile-menu-btn { display: none !important; }
          }
        `}</style>
        <Link to="/">Home</Link>
        <Link to="/verify">Verify</Link>
        <Link to="/login" className="btn-outline" style={{ padding: '0.5rem 1rem' }}>Login</Link>
        <Link to="/register" className="btn-primary" style={{ padding: '0.5rem 1rem' }}>Get Started</Link>
      </div>

      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="glass-panel" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '1rem',
          flexDirection: 'column',
          display: 'flex',
          padding: '1rem',
          gap: '1rem'
        }}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/verify" onClick={() => setIsOpen(false)}>Verify</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/register" onClick={() => setIsOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
