import React, { useState } from 'react';

const RoomFilter = () => {
  const [roomType, setRoomType] = useState('');
  const [roomRequirements, setRoomRequirements] = useState([]);

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };

  const handleRoomRequirementChange = (e) => {
    const selectedRequirements = Array.from(e.target.options)
      .filter(option => option.selected)
      .map(option => option.value);
    setRoomRequirements(selectedRequirements);
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="roomType" className="block mb-1">Room Type</label>
        <select
          id="roomType"
          className="w-full p-2 border rounded"
          value={roomType}
          onChange={handleRoomTypeChange}
        >
          <option value="" disabled hidden>Select Room Type</option>
          <option value="single">ClassRoom</option>
          <option value="double">Lab</option>
          <option value="suite">Seminar Hall</option>
        </select>
      </div>
      <div className="mb-4">
        
        <div className="mb-4">
  <label htmlFor="roomRequirements" className="block mb-1">Room Requirements</label>
  <div className="flex flex-wrap">
    <label className="inline-flex items-center mr-4 mb-2">
      <input
        type="checkbox"
        id="wifi"
        value="wifi"
        checked={roomRequirements.includes("wifi")}
        onChange={handleRoomRequirementChange}
        className="form-checkbox h-5 w-5 text-[#280274] rounded-md border-[#280274] mr-2"
      />
      <span className="text-[#280274]">Wifi</span>
    </label>
    <label className="inline-flex items-center mr-4 mb-2">
      <input
        type="checkbox"
        id="projector"
        value="projector"
        checked={roomRequirements.includes("projector")}
        onChange={handleRoomRequirementChange}
        className="form-checkbox h-5 w-5 text-[#280274] rounded-md border-[#280274] mr-2"
      />
      <span className="text-[#280274]">Projector</span>
    </label>
    <label className="inline-flex items-center mr-4 mb-2">
      <input
        type="checkbox"
        id="switch-boards"
        value="switch-boards"
        checked={roomRequirements.includes("switch-boards")}
        onChange={handleRoomRequirementChange}
        className="form-checkbox h-5 w-5 text-[#280274] rounded-md border-[#280274] mr-2"
      />
      <span className="text-[#280274]">Switch Boards</span>
    </label>
    {/* Add more checkboxes as needed */}
  </div>
</div>

      </div>
    </div>
  );
};

export default RoomFilter;
