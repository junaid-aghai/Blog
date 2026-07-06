import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom"
import axios from 'axios';
import 'remixicon/fonts/remixicon.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Admin from './components/Admin'
import Dashboard from './components/dashboard'
import Create from './components/CreatePost'
import PostDetailPage from './components/PostDetailPage';
import EditPost from './components/EditPost'

const App = () => {
  const [items, setItems] = useState([]);
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/api");
    setItems(response.data.xyz);
  }
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home items={items}/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="admin/dashboard" element={<Dashboard items={items} fetchAPI={fetchAPI}/>} />
        <Route path="admin/dashboard/create" element={<Create items={items} fetchAPI={fetchAPI}/>} />
        <Route path="/post/:id" element={<PostDetailPage items={items} />} />
        <Route path="/admin/dashboard/edit/:id" element={<EditPost items={items}/>} />
      </Routes>
    </>
  )
}

export default App