import React, { useState } from 'react';
import axios from 'axios';

const AddCard = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id, name, age };

    axios.post('http://localhost:5000/users', newUser)
      .then((response) => {
        setSuccess('User added successfully!');
        setId('');
        setName('');
        setAge('');
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="w3-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <br />
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add User</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && (
        <div style={{ color: 'green', fontSize: '18px', fontWeight: 'bold' }}>
          {success}
        </div>
      )}
    </div>
  );
};

export default AddCard;