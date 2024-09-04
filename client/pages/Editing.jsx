import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Editing({data}) {
    const [editing, setEditing] = useState(false);
    const{id}=useParams
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
    

    // const handleEdit = async (id) => {
    //     try {
    //       const response = await axios.get(`http://localhost:5000/users/${id}`);
    //       setCurrentUser(response.data);
    //       setEditing(true);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

      const handleUpdate = async (id) => {
        try {
          await axios.put(`http://localhost:5000/users/${id}`, currentUser);
          setNewdata(
            newdata.map((user) => (user.id === id ? currentUser : user))
          );
          setEditing(false);
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <h1>hi</h1>
    // <div>
        
    //     <div className="w3-card-4" style={{ width: "50%" }}>
    //       <header className="w3-container w3-blue">
    //         <p>Edit User: {currentUser.id}</p>
    //       </header>
    //       <div className="w3-container">
    //         <form>
    //           <label>Name:</label>
    //           <input
    //             type="text"
    //             name="name"
    //             value={currentUser.name}
    //             onChange={handleChange}
    //           />
    //           <br />
    //           <label>Age:</label>
    //           <input
    //             type="number"
    //             name="age"
    //             value={currentUser.age}
    //             onChange={handleChange}
    //           />
    //           <br />
    //           <button onClick={() => handleUpdate(currentUser.id)}>Update</button>
    //         </form>
    //       </div>
    //       <footer className="w3-container w3-blue"></footer>
    //     </div>
    
    // </div>

  )
}
