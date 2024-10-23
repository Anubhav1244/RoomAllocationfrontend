import React from 'react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SetClassBookingdata } from '../Slice/classSlice';
const CreateRoom = () => {
  const [formData, setFormData] = useState({
    RoomNumber:'',
    FloorLocation: '',
    Department: '',
    Layout: '',
    Capacity: '',
    Projector: false,
    Wifi: false,
    Switchboard: false,
    Description: ''
  });
  const dispatch=useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    dispatch(SetClassBookingdata(formData))

    setFormData({
    RoomNumber:'',
    FloorLocation: '',
    Department: '',
    Layout: '',
    Capacity: '',
    Projector: false,
    Wifi: false,
    Switchboard: false,
    Description: ''
      })

    navigate('/roomschedule')


  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center flex-col">
    <h1 className='text-3xl text-center font-bold mt-16'>Create Room</h1>
      <form className="max-w-md mx-auto bg-white p-8 rounded shadow-md max-w-xl w-full mt-16" onSubmit={handleSubmit}>
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="FloorLocation">
            Room Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="FloorLocation"
            type="text"
            placeholder="201"
            name="RoomNumber"
            value={formData.RoomNumber}
            onChange={handleChange}
            required
          />
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-3" htmlFor="FloorLocation">
            Floor Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="FloorLocation"
            type="text"
            placeholder="1st floor"
            name="FloorLocation"
            value={formData.FloorLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Department">
            Department
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Department"
            type="text"
            placeholder="Department"
            name="Department"
            value={formData.Department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Layout">
            Layout
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Layout"
            name="Layout"
            value={formData.Layout}
            onChange={handleChange}
            required
          >
            <option value="">Select Layout</option>
            <option value="Row wise seating arrangement">Row wise seating arrangement</option>
            <option value="Circular table">Circular table</option>
            <option value="Lab arrangement">Lab arrangement</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Capacity">
            Capacity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Capacity"
            type="text"
            placeholder="Capacity"
            name="Capacity"
            value={formData.Capacity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <input
              type="checkbox"
              className="mr-2 leading-tight"
              name="Projector"
              checked={formData.Projector}
              onChange={handleChange}
            />
            <span className="text-sm">Projector</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <input
              type="checkbox"
              className="mr-2 leading-tight"
              name="Wifi"
              checked={formData.Wifi}
              onChange={handleChange}
            />
            <span className="text-sm">Wifi</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <input
              type="checkbox"
              className="mr-2 leading-tight"
              name="Switchboard"
              checked={formData.Switchboard}
              onChange={handleChange}
            />
            <span className="text-sm">Switchboard</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Description">
            Description
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            required
          >
            <option value="">Select Description</option>
            <option value="Classroom">Classroom</option>
            <option value="Lab">Lab</option>
            <option value="Edusat hall">Edusat hall</option>
            <option value="Seminar hall">Seminar hall</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
            rounded flex items-center gap-2 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Next
            <FaArrowRight/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoom;
