import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Produse, Contact, Home, LogIn, SignUp } from './pages';
import { Route, Routes } from "react-router-dom"




function App () {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes className="secondContainer">
          <Route path="/" element={<Home />} />
          <Route path="/Produse" element={<Produse />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
};

export default App;