import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Produse, Contact, Home, LogIn, SignUp, ContulMeu, CosulMeu, AddProduse, Checkout} from './pages';
import {Route, Routes} from "react-router-dom"
import {AuthContextProvider} from './global/Auth';


function App() {
    return (
        <>
            <Navbar/>
            <div>
                <AuthContextProvider>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path='/ContulMeu' element={<ContulMeu/>}/>
                        <Route path='/CosulMeu' element={<CosulMeu />} />
                        <Route path='/Checkout' element={<Checkout />} />
                        <Route path='/AddProduse' element={<AddProduse />} />
                        <Route path="/Produse" element={<Produse/>}/>
                        <Route path="/Contact" element={<Contact/>}/>
                        <Route path="/LogIn" element={<LogIn/>}/>
                        <Route path="/SignUp" element={<SignUp/>}/>
                    </Routes>
                </AuthContextProvider>
            </div>
        </>
    );
};

export default App;