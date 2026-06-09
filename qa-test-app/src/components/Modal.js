import './Modal.css';

export default function Modal({ show, onClose, title = 'Modal Popup', children }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-card">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button aria-label="close" onClick={onClose} className="modal-button secondary">✕</button>
        </div>
        <div className="modal-body">
          {children || <p>This is a sample modal. Use it to show important information or confirmations.</p>}
        </div>
        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onClose}>Close</button>
          <button className="modal-button primary" onClick={onClose}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
