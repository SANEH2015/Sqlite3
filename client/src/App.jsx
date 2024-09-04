import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from "../pages/Card";
import Layout from "../pages/Layout";
import Nopage from "../pages/nopage";
import AddCard from "../pages/Addcard";
import Editing from "../pages/Editing";
import Getallusers from "../component/Getallusers";

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  // console.log(data);

  return (
    <>
  
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Card/>} />
          <Route path="/Getallusers" >
          <Route index  element={<Getallusers/>}/>
          <Route path=":id"element={<Editing user={data} />}/>
          </Route>
          <Route path="Addcard" element={<AddCard />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;