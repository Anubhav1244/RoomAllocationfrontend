import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classRoomBooking } from '../services/classApi';
import toast from 'react-hot-toast';
import { apiconnector } from '../services/apiconector';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [day, setDay] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);
  const { token } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableRoom = async () => {
      toast.loading('Loading...');
      try {
        const response = await apiconnector('GET', 'http://localhost:5000/api/v1/getavailableRooms');
        setAvailableRooms(response.data.response);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
      toast.dismiss();
    };
    fetchAvailableRoom();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!day || !start || !end || !roomNo) {
      toast.error("Fill all the details");
      return;
    }

    dispatch(classRoomBooking(token, day, start, end, roomNo, navigate));

    setDay('');
    setStart('');
    setEnd('');
    setRoomNo('');
  };

  if (availableRooms && availableRooms.length === 0) {
    return <h1 className="text-3xl text-center text-red-700 mt-8">No rooms are available now!!</h1>;
  }

  return (
    <div className="w-full h-full mt-8 flex flex-col md:flex-row justify-around items-start gap-8">
      <div className="w-full md:w-1/2 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Book a Room</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="day" className="block text-sm font-medium text-gray-700">Day:</label>
            <input
              type="text"
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="start" className="block text-sm font-medium text-gray-700">Start Time:</label>
            <input
              type="time"
              id="start"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="end" className="block text-sm font-medium text-gray-700">End Time:</label>
            <input
              type="time"
              id="end"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="roomNo" className="block text-sm font-medium text-gray-700">Room Number:</label>
            <input
              type="text"
              id="roomNo"
              value={roomNo}
              onChange={(e) => setRoomNo(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
            Submit
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Available Rooms</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {availableRooms && availableRooms.map((room) => (
            <button key={room.id} className="bg-blue-700 p-3 rounded-lg text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              {room.roomNo}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
