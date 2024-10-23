// Header.js
import React from 'react';
import rnslogo from '../assest/logo.png'
import {Link} from  'react-router-dom'
import {useSelector} from 'react-redux' 
import ProfileDropDown from "./ProfileDropDown"
function Header() {
  const{token}=useSelector((state)=>state.auth)
  const {user} =useSelector((state)=>state.profile)
  // console.log(user.Role)
  return (
    <div className='flex h-18  justify-around items-center w-screen bg-richblack-900 border-b-2 border-b-richblack-300'>
        <div className='flex  w-11/12 gap-3 max-w-maxContent p-2 items-center ml-10'>
          <img src={rnslogo} className='h-[10vh]'></img>
          
          <h1 className="text-4xl font-bold mt-2">RNSIT</h1>
          
          <h2 className="text-2xl font-bold mt-4 text-[#FE7A36]">CSE</h2>
          {/* Navbar items go here */}
          
        </div>
        <div className="flex justify-center items-center w-full translate-x-36">
        {
          token ===null &&(<Link to={"/signup"}>
            <button className=" p-2 w-[5vw]  rounded-md outline mr-4">Signup
            </button>
            </Link>)
        }
        {
          token ===null && (
              <Link to={"/login"}>
              <button className=" p-2 w-[5vw]  rounded-md outline mr-4">Login
              </button></Link>
            )
        }
        {
            user && user?.Role === "Admin" &&(
                <div className='flex'>
               <Link to="/createroom"> <button className=" p-2 rounded-md outline mr-4"> createRoom </button></Link>
                   
               
                <button className=" p-2   rounded-md outline mr-4">
                    updateRoom
                </button>
                </div>
            )
          }  
        {
                token!==null && (
                    <ProfileDropDown></ProfileDropDown>
                )
              
        }
         
          

         
        </div>
      </div>
  );
}

export default Header;
