// Dashboard.js
import React, { useState } from 'react';
import Room from './Room';
import Modal from './Modal';
import '../App.css'
import ImageSlider from './ImageSlider';
import admin from '../assest/admin.jpg'
import coe from '../assest/coe.jpg'
import cse from '../assest/cse_block.jpg'
import rns from '../assest/rns.jpg'
import RoomFilter from './RoomFilter';
import Staffpics from './staffpics';
import Leaderboard from './Leaderboard';
import Footer from './Footer';
import ApprovedlMoadal from './ApproveModal'

import { Link } from 'react-router-dom';
import BookingDetail from './BookingDetails';
import { useSelector } from 'react-redux';
const initialRooms = [
  { id: 1, name:  '201', description: 'Classroom' },
  { id: 2, name:  '202', description: 'Classroom' },
  { id: 3, name:  203, description: 'Classroom' },
  { id: 4, name:  204, description: 'Classroom' },
  { id: 5, name:  205, description: 'Classroom' },
  { id: 6, name:  206, description: 'Classroom' },
  { id: 7, name:  207, description: 'Washroom' },
  { id: 14, name:  214, description: 'ADE Lab' },
  { id: 13, name: 213, description: 'Seminar Hall' },
  { id: 12, name:  212, description: 'Staff Room' },
  { id: 11, name:  211, description: 'Staff Room' },
  { id: 10, name: 210, description: 'Staff Room' },
  { id: 9, name: 209, description: 'HOD room' },
  { id: 8, name: 208, description: 'CN Lab.' },

  // Add more rooms as needed
];

const images = [
  { src: admin, alt: 'Image 1' },
  { src: coe, alt: 'Image 2' },
  { src: cse, alt: 'Image 3' },
  {src: rns,alt:'Image 4'},
  // Add more images as needed
];
const Dashboard = () => {
  const [rooms] = useState(initialRooms);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {user}=useSelector(state=>state.profile)
  const[openmodal,setmodelopen]=useState(false);
  const handleRoomHover = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleclose=()=>{

    setmodelopen(!openmodal);
  }
  console.log("open ...",openmodal);
  return (
    <div className="grid grid-cols-1  gap-4 p-1">
      {/* First Section with three equal-sized boxes */}
      <div className="flex justify-center items-center bg-[#E9F6FF] p-4">
      <div className="flex font-madeFor  gap-10 ">
        <div className="w-11/12 bg-[#FE7A36] h-[25vh]  flex flex-col gap-2 items-left p-6 flex-1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
         transition-all duration-200 rounded-lg ">
          <h2 className='text-white font-medium text-lg'>Total Classrooms:</h2>
          <h2 className='text-white font-bold text-3xl'>06</h2>
          
            
        </div>
        
        <div className="w-1/4 bg-[#280274] h-[25vh] flex flex-col gap-2 items-left p-6 flex-1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
         transition-all duration-200 rounded-lg">
          <h2 className='text-white font-medium text-lg'>Total Number of Labs:</h2>
          <h2 className='text-white font-bold text-3xl'>03</h2>
        </div>
        <div className="w-1/4 bg-[#FE7A36] h-[25vh]  flex flex-col gap-2 items-left p-6 flex-1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
         transition-all duration-200 rounded-lg ">
          <h2 className='text-white font-medium text-lg'>Total Number of Halls:</h2>
          <h2 className='text-white font-bold text-3xl'>02</h2>
        </div>
        <div className="w-1/4 bg-[#280274] h-[25vh]  flex flex-col gap-2 items-left p-6 flex-1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
         transition-all duration-200 rounded-lg mr-4">
          <h2 className='text-white font-medium text-lg'>Total Number of Staff Rooms:</h2>
          <h2 className='text-white font-bold text-3xl'>05</h2>
        </div>
      </div>
      </div>


      {/* Second Section with two vertical sections */}
      <div className="flex  bg-[#E9F6FF] ">
        {/* Left section */}
        <div className="w-2/3 bg-[#E9F6FF] rounded p-1 ">
         <RoomFilter className='mt-4'/> 
          <h2 className='text-xl font-bold text-center mt-14'>2nd Floor</h2>
          <div className=" p-4 flex justify-center items-center bg-[#E9F6FF]">
      <div className="flex flex-wrap justify-start grid grid-cols-7 gap-4 ">
        {rooms.map(room => (
          <Room key={room.id} room={room} onHover={handleRoomHover} />
        ))}
      </div>
      
      <Modal isOpen={isModalOpen} content={selectedRoom} onClose={handleCloseModal}  />
    </div>
    <div className='flex justify-center items-center mt-16 rounded-lg bg-blue-700 w-[300px] mx-auto p-2'>
        <Link to="/bookingroom"><button className='flex justify-center hover: scale-95 transition-all duration-200'>Book Your Room</button></Link>  
    </div>
    <div className='flex justify-center items-center mt-16 rounded-lg bg-blue-700 w-[300px] mx-auto p-2'>
        <button className='flex justify-center hover: scale-95 transition-all duration-200' onClick={handleclose}>Classroom swap request</button> 
    </div>
  </div>
        {/* Right section */}
        <div className="w-1/3 rounded p-1 "><ImageSlider  images={images}/></div>
      </div>
        
      {/* Third Section (You can add more sections if needed) */}
     <div>
          
          {
            user && (user.Role === 'Admin' || user.Role==='HOD') && (
              <div className='flex w-screen justify-around items-center mt-16 bg-blue-100'>
            <div><Leaderboard/></div>
            <div><BookingDetail/></div>
          </div>
            )
          }
          <ApprovedlMoadal isOpen={openmodal} handleclose={handleclose}/>
          <div className="mt-16">
          {!openmodal && <Staffpics/>}
          </div>
         
          <Footer/>
     </div>
     
    </div>
  
  );

    
};

export default Dashboard;