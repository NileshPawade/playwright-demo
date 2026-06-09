import React, { useState } from 'react';
import Modal from './Modal';
import './Dashboard.css';

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="dashboard-container">
      <div className="dashboard-card">
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard!</p>
        <button className="dashboard-open-button" onClick={() => setShowModal(true)}>Open Modal</button>
        <Modal show={showModal} onClose={() => setShowModal(false)} />
      </div>
    </main>
  );
}
