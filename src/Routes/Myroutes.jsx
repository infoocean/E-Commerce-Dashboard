import React from 'react';
import {Routes, Route} from "react-router-dom";
import SidebarWithHeader from '../Dashboard';

function MyRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<SidebarWithHeader/>} />
            <Route path="/home" element={<SidebarWithHeader/>} />
        </Routes>
       </>
    );
  }
  
  export default MyRoutes;
