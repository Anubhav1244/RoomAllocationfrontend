// App.js
import './App.css';
import React from 'react';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Approval from './components/Approval';
import {  Routes, Route } from "react-router-dom"; // Import BrowserRouter
import 'flowbite/dist/flowbite.css';
import './fonts.css';
import TeacherForm from './components/TeacherForm';
import OTP from  './components/OTP';
import LoginPage from './components/Login';
import SignUpPage from './components/Signup'
import Header from './components/Header';
import BookingRoom from './components/BookingRoom';
import CreateRoom from './components/createRoom';
import Roomschedule from './components/Roomschedule';
import BookingDetail from './components/BookingDetails';
function App() {
  return (

    <div className="container mx-auto font-madeFor">
      <Header/>
      <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/dashboard' element={<Dashboard/>} ></Route>
          <Route path='/approval'  element={<Approval/>}></Route>
          <Route path='/login' element={<LoginPage/>}> </Route>
          <Route path='/signup' element={<SignUpPage/>}></Route>
          <Route path='/teacherform' element={<TeacherForm/>}></Route>
          <Route path='/otp' element={<OTP/>}></Route>
          <Route path='/bookingroom' element={<BookingRoom/>}></Route>
          <Route path='/createroom' element={<CreateRoom/>}></Route>
          <Route path='/roomschedule' element={<Roomschedule/>}></Route>
          <Route path='/roomanalysis' element={<BookingDetail/>}></Route>
          
      </Routes>
    </div>
  );
}

export default App;
