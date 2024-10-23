import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChart from './Piechart';
import BookingForm from './BookingDetailForm';
import { apiconnector } from '../services/apiconector';
const BookingPieChart = () => {
  const [bookingData, setBookingData] = useState([]);
  let roomNo = "205";
  let month = "March";
  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await apiconnector('GET', `http://localhost:5000/api/v1/bookingdetails/${roomNo}/${month}` );

        console.log(response.data)
        setBookingData({
            month: month,
            bookedDays: response.data.NoofBooking,
            roomNo: roomNo,
          });
  
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    fetchBookingData();
  }, []);

  return (
    <div className='mt-16 mb-10'>
    <div className=''>

    </div>
      
      <div className='flex gap-16'>
      
      <PieChart bookingData={bookingData} />
      <BookingForm setBookingData={setBookingData}/>
      </div>
      
    </div>
  );
};

export default BookingPieChart;
