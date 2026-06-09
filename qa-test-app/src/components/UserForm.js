import React, {useState} from 'react';

export default function UserForm({onSubmit}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({name, email});
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} style={{marginTop: '1rem'}}>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" aria-label="name" />
      </div>
      <div style={{marginTop: '0.5rem'}}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" aria-label="email" />
      </div>
      <button type="submit" style={{marginTop: '0.5rem'}}>Add User</button>
    </form>
  );
}
