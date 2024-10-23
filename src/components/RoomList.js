// RoomList.js
import React from 'react';

function RoomList() {
  // Sample room data
  const rooms = [
    { id: 1, name: 'Room 101', capacity: 4, status: 'Available' },
    { id: 2, name: 'Room 102', capacity: 2, status: 'Occupied' },
    { id: 3, name: 'Room 103', capacity: 3, status: 'Available' },
    { id: 4, name: 'Room 104', capacity: 5, status: 'Available' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {rooms.map(room => (
        <div key={room.id} className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-lg font-bold mb-2">{room.name}</h2>
          <p>Capacity: {room.capacity}</p>
          <p>Status: {room.status}</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600">Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default RoomList;
