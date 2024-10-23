import React, { useState } from "react";
import { apiconnector } from "../services/apiconector";
import { toast } from "react-hot-toast";
import Modal from "./Modal";
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
const Room = ({ room }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomDetails, setRoomDetails] = useState({});
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const openModal = async() => {
      
    const toastId=toast.loading("Loading...")
    try{
      const fetchRoomDetails = await apiconnector("GET",`http://localhost:5000/api/v1/getroomdetails/${room.name}`)
    
      console.log(fetchRoomDetails?.data?.response)

      setRoomDetails(fetchRoomDetails?.data?.response)

      setIsModalOpen(true);

      toast.dismiss(toastId)


    }
    catch(error)
    {
      console.error(error.message);
      
      setIsModalOpen(false);
      toast.dismiss(toastId)
      toast.error("Error in fetching room details")
    }
    
  };

  const closeModal = () => {

    setIsModalOpen(false);
  };

  return (
    <div>
      
      {/* Room element with hover effect */}
      <Tippy  content={room.description} arrow={true} className="bg-black text-white">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={openModal}
        
        
        style={{
          cursor: "pointer",
          border: "1px solid #ccc",
          width: "100px",
          padding: "10px",
          textAlign: "center",
          borderRadius: "8px",
          backgroundColor: roomColor(room.id),
          color: "white",
          fontWeight: "bold"
        }}
      >
        {room.name}
      </button>
      </Tippy>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} room={room} roomDetails={roomDetails}>
        <h2>{room.description}</h2>
        {/* Additional modal content can go here */}
        <h2>{roomDetails.wifi}</h2>
      </Modal>
     
      {/* Room description displayed on hover */}
      
      
     
    </div>
  );
};

// Function to determine room color based on ID
const roomColor = (id) => {
  if (id >= 1 && id <= 6) {
    return "#FE7A36";
  } else if (id === 7) {
    return "#4A5568";
  } else if (id >= 9 && id <= 12) {
    return "#280274";
  } else {
    return "#FE7A36";
  }
};

export default Room;
