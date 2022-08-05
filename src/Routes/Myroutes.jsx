import React from 'react';
import {Routes, Route} from "react-router-dom";
import SidebarWithHeader from '../Dashboard';
import LoginForm from '../MyComponents/FormComponents/LoginForm';
import SignupForm from '../MyComponents/FormComponents/SignUpForm';
import ProductPage from '../MyComponents/ProductPage/ProductPageHeraderSidebar';


function MyRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<SidebarWithHeader/>} />
            <Route path="/home" element={<SidebarWithHeader/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/signup" element={<SignupForm/>} />
            <Route path="/Productpage" element={<ProductPage/>} />
        </Routes>
       </>
    );
  }
  
  export default MyRoutes;
