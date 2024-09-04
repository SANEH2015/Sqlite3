import React, { useState, useEffect } from 'react';

export default function Editing() {
    const [editing, setEditing] = useState(false);
    
    const handleEdit = async (id) => {
        try {
          const response = await axios.get(`http://localhost:5000/users/${id}`);
          setCurrentUser(response.data);
          setEditing(true);
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div>
         {editing && (
        <div className="w3-card-4" style={{ width: "50%" }}>
          <header className="w3-container w3-blue">
            <p>Edit User: {currentUser.id}</p>
          </header>
          <div className="w3-container">
            <form>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={currentUser.name}
                onChange={handleChange}
              />
              <br />
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={currentUser.age}
                onChange={handleChange}
              />
              <br />
              <button onClick={() => handleUpdate(currentUser.id)}>Update</button>
            </form>
          </div>
          <footer className="w3-container w3-blue"></footer>
        </div>
      )}
    </div>

  )
}
