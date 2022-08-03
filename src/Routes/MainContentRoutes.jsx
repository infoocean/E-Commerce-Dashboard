import React from 'react';
import SidebarWithHeader from '../Dashboard';
import {Routes, Route} from "react-router-dom";

function MymainRoutes() {
    return (
        <>
        <Routes>
            <Route path="/features" element={<SidebarWithHeader/>} />
        </Routes>
       </>
    );
  }
  
  export default MymainRoutes;