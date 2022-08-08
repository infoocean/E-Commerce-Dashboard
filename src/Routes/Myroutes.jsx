import React from 'react';
import {Routes, Route} from "react-router-dom";
import SidebarWithHeader from '../Dashboard';
import CalenderPage from '../MyComponents/CalenderPage/Calenderpage';
import LoginForm from '../MyComponents/FormComponents/LoginForm';
import SignupForm from '../MyComponents/FormComponents/SignUpForm';
import MessagePage from '../MyComponents/MessagePage/Messagepage';
import NotificationPage from '../MyComponents/NotificationsPage/Notificationpage';
import ProductPage from '../MyComponents/ProductPage/ProductPageHeraderSidebar';
import SettingPage from '../MyComponents/SettingsPage/Settingpage';

function MyRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<SidebarWithHeader/>} />
            <Route path="/home" element={<SidebarWithHeader/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/signup" element={<SignupForm/>} />
            <Route path="/productpage" element={<ProductPage/>} />
            <Route path="/calender" element={<CalenderPage/>} />
            <Route path="/notification" element={<NotificationPage/>} />
            <Route path="/messages" element={<MessagePage/>} />
            <Route path="/settings" element={<SettingPage/>} />
        </Routes>
       </>
    );
  }
  
  export default MyRoutes;
