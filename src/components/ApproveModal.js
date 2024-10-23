import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { apiconnector } from '../services/apiconector';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';


const Modal = ({ isOpen, handleclose }) => {
  const [Recievername, setInput1] = useState('');
  const [roomNo, setInput2] = useState('');
  const navigate=useNavigate()
  const { token } = useSelector((state) => state.auth);
  const handlesubmit =async(e)=>{
    e.preventDefault();
    const resposne=await apiconnector("POST","http://localhost:5000/api/v1/approvalmail",{token,Recievername,roomNo});
    console.log("MAIL RESPOSNE",resposne);
    if(resposne.status===200)
    {
        toast.success(resposne.data)
        handleclose();
    }
    else
    {
        toast.error(resposne.data);
    }

   
     
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <div className='flex flex-row justify-evenly'>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Swap Class Request</h3>
          <button
                
                className=' font-extrabold bg-red-500 rounded-full flex justify-center items-center px-2 py-1'
              onClick={handleclose}
            >
              X
            </button>
          </div>
          <div className="mt-2 px-7 py-3">
            <input
              type="text"
              value={Recievername}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="Teacher name ex-Anubhav"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              value={roomNo}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="Your Room Number ex-201"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full mt-4"
            />
          </div>
          <div className="items-center px-4 py-3">
          <button
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={handlesubmit}
            >
              Submit 
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
