import React from 'react';
import tick from '../assest/tick.jpg'
import { useSelector } from 'react-redux';

const SwapRequest = () => {
  const User=localStorage.getItem("user")
  const Userresponse=JSON.parse(User)
  return (
    <div className="bg-[#E9F6FF] min-h-screen flex justify-center items-center">
        
      <div className="bg-[white] p-8 rounded shadow-md max-w-md flex flex-col items-center">
      <img src={tick} alt='tick' className='h-[15vh]'></img>
      <h1 className='text-2xl font-bold p-2'>Approval Page</h1>
      
      <button className="bg-[#280274] w-full text-white font-bold py-2 px-4 rounded mt-4  focus:outline-none focus:bg-blue-600">Approved</button>
       
        
        <button className="bg-[#f03131] w-full text-white font-bold py-2 px-4 rounded mt-4  focus:outline-none focus:bg-blue-600">Not Approved</button>
      </div>
    </div>
  );
};

export default SwapRequest;
