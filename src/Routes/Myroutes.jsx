import React from 'react';
import {Routes, Route} from "react-router-dom";
import SidebarWithHeader from '../Dashboard';
import LoginForm from '../MyComponents/FormComponents/LoginForm';
import SignupForm from '../MyComponents/FormComponents/SignUpForm';

function MyRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<SidebarWithHeader/>} />
            <Route path="/home" element={<SidebarWithHeader/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/signup" element={<SignupForm/>} />
        </Routes>
       </>
    );
  }
  
  export default MyRoutes;
