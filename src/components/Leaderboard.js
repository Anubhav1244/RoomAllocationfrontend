import React, { useState, useEffect } from 'react';
import { apiconnector } from '../services/apiconector';
const RoomLeaderboard = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Mock fetch function (replace this with your actual data fetching logic)
    const fetchRooms = async () => {
      const response = await apiconnector('GET', `http://localhost:5000/api/v1/getallrooms` );

      // Mock data
      console.log(response.data)
      const data = response.data.response;

      const sortedData = data.sort((a, b) => b.no_of_booking - a.no_of_booking);
      setRooms(sortedData);
    };

    fetchRooms();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 mb-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Room Booking Leaderboard</h2>
      <ol className="bg-white rounded-lg border border-gray-200">
        {rooms.map((room, index) => (
          <li key={index} className="px-6 py-4 border-b border-gray-200 w-full rounded-t-lg flex justify-between items-center">
            <span className="font-medium text-gray-900">{room.roomNo}</span>
            <span className='text-gray-700'>{room.description}</span>
            <span className="text-gray-700">Booked {room.no_of_booking} times</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RoomLeaderboard;
