import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreateRoom } from '../services/classApi';
import { useSelector } from 'react-redux';
const ScheduleForm = () => {
  const [scheduleData, setScheduleData] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });
  const{ClassBookingdata}=useSelector(state=>state.class)
  const{token}=useSelector(state=>state.auth)
const dispatch = useDispatch();
const navigate = useNavigate();

const handleDayChange = (day, index, field, value) => {
  const newScheduleData = { ...scheduleData };
  newScheduleData[day][index] = {
    ...newScheduleData[day][index],
    [field]: value,
  };
  setScheduleData(newScheduleData);
};

const handleRemoveTimeSlot = (day, index) => {
  const newScheduleData = { ...scheduleData };
  newScheduleData[day].splice(index, 1);
  setScheduleData(newScheduleData);
};

  const handleAddTimeSlot = (day) => {
    const newScheduleData = { ...scheduleData };
    newScheduleData[day].push({ start: '', end: '' });
    setScheduleData(newScheduleData);
  };
  const handleSubmit = async (e) => {
    
    e.preventDefault();
        console.log(scheduleData)
        console.log(ClassBookingdata);
        const { RoomNumber, FloorLocation, Department, Layout, Capacity, Projector,Wifi,Switchboard,Description} = ClassBookingdata;
        if (!ClassBookingdata) {
            navigate('/createroom');
        } else {
            console.log('clasroomdetails', ClassBookingdata);
            dispatch(CreateRoom(token,RoomNumber, FloorLocation, Department,Layout, Capacity,Projector, Wifi,Switchboard,Description,scheduleData)); // Pass navigate as a parameter
        }

   
  };

  return (
    <>

  
    
<div className="max-w-4xl mx-auto p-5 flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="mb-5 font-bold text-2xl">Add Room Schedule</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
          <div key={day} className="flex flex-col mb-4">
            <label className="font-semibold mb-2">{day}:</label>
            {scheduleData[day].map((slot, index) => (
              <div key={index} className="flex space-x-4 items-center mb-2">
                <input
                  type="time"
                  value={slot.start}
                  onChange={(e) => handleDayChange(day, index, 'start', e.target.value)}
                  className="border border-gray-300 p-2 rounded"
                />
                <input
                  type="time"
                  value={slot.end}
                  onChange={(e) => handleDayChange(day, index, 'end', e.target.value)}
                  className="border border-gray-300 p-2 rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveTimeSlot(day, index)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddTimeSlot(day)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Time Slot
            </button>
          </div>
        ))}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create ClassRoom
        </button>
      </form>
    </div>
    </>
  );
};

export default ScheduleForm;
