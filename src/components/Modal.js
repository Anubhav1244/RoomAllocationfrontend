// Modal.js
import React from "react";
import './Modal.css';
import { apiconnector } from "../services/apiconector";
import { IoCloseSharp } from "react-icons/io5"
const Modal = ({ isOpen, onClose, roomDetails}) => {
  if (!isOpen) return null;
  console.log(roomDetails)
  
  return (
    <div className="modal z-50" style={{
      position: "absolute",
      top: 0,
      left:0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div  style={{
        backgroundColor: "#E5E4E2",
        padding: "20px",
        borderRadius: "5px",
        width: "500px",
        maxWidth: "100%",
        display: "flex-column",
        flexDirection: "row-reverse",
        color: "red",
        borderRadius: "10px",
        position: "relative",
        left:"0px",
        top:"60px",
        border: "1px solid black",
      }}>
        <button onClick={onClose}><IoCloseSharp /></button>
        <div className="flex flex-col">
        <h1 className="text-center text-black text-2xl font-bold">{roomDetails.roomNo}</h1>
        <h1 className="text-center text-black font-sm font-semibold">{roomDetails.description}</h1>
        </div>
        <div className="flex flex-col text-black gap-3 ml-6 p-4 m-4">
          <h1 className="text-2xl font-bold">Basic Information</h1>
          <li><span className="font-bold">Floor Location:</span> Second floor ,IT block</li>
          <li><span className="font-bold">Department:</span> Computer science</li>
          <h1 className="text-2xl font-bold ">Physical Characteristics</h1>
          <li><span className="font-bold">Layout:</span> Row wise seating arrangement</li>
          <li><span className="font-bold">Capacity:</span> 60</li>
          <ul className="text-2xl font-bold ">Equipment and Facilities</ul>
          <li className="font-bold">Projector {roomDetails.roomAssest.projector=== "true" ? <span>✅</span>:<span>❌</span>}</li>
            <li className="font-bold">Wifi {roomDetails.roomAssest.wifi=== "true" ? <span>✅</span>:<span>❌</span>}</li>
            <li className="font-bold">Switchboard {roomDetails.roomAssest.switchboard=== "true" ? <span>✅</span>:<span>❌</span>}</li>
        </div>
        

        
      </div>
      
    </div>
  );
};

export default Modal;