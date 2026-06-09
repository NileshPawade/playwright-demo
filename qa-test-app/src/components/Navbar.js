import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{padding: '1rem', background: '#282c34', color: 'white'}}>
      <Link to="/" style={{marginRight: '1rem', color: 'white', textDecoration: 'none'}}>Login</Link>
      <Link to="/dashboard" style={{marginRight: '1rem', color: 'white', textDecoration: 'none'}}>Dashboard</Link>
      <Link to="/users" style={{color: 'white', textDecoration: 'none'}}>Users</Link>
    </nav>
  );
}
