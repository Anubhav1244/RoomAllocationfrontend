import React, { useState } from 'react';
import { apiconnector } from '../services/apiconector';
const Form = ({setBookingData}) => {
  const [formData, setFormData] = useState({
    roomNo: '',
    month: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
const{roomNo,month}=formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiconnector('GET', `http://localhost:5000/api/v1/bookingdetails/${roomNo}/${month}` );

        console.log(response.data)
        setBookingData({
            month: month,
            bookedDays: response.data.NoofBooking,
            roomNo: roomNo,
          });

          setFormData({
            roomNo: '',
            month: '',
          });
          

  
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

  return (
    <div className=" flex items-center justify-center">
      <form className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomNumber">
            Room Number
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="roomNumber"
            type="text"
            placeholder="Room Number"
            name="roomNo"
            value={formData.roomNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="month">
            Month
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="month"
            name="month"
            value={formData.month}
            onChange={handleChange}
            required
          >
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;