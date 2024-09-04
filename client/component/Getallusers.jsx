import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Getallusers() {
  const [newdata, setNewdata] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setNewdata(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

 

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setNewdata(newdata.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };


const handleEdit = async (id) => {
        try {
          const response = await axios.get(`http://localhost:5000/users/${id}`);
          setCurrentUser(response.data);
          setEditing(true);
        } catch (error) {
          console.error(error);
        }
      };

  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="w3-container">
        <h2>Users</h2>
        {newdata.map((user, index) => (
          <div key={index} className="w3-card-4" style={{ width: "50%" }}>
            <header className="w3-container w3-blue">
              <p>
                User: {user.id}
                <br />
                Name: {user.name}
                <br />
                Age: {user.age}
              </p>
            </header>
            <div className="w3-container">
              <p>
               
              <Link to={'/Editing'}> <button onClick={() => handleEdit(user.id)}>Edit</button></Link>  
              <button onClick={() => handleDelete(user.id)}>Delete</button>
              </p>
            </div>
            <footer className="w3-container w3-blue"></footer>
          </div>
        ))}
      </div>
   </div>
  );
}