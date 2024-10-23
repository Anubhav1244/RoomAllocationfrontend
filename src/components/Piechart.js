import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChart = ({ bookingData}) => {
  const { bookedDays, roomNo,month } = bookingData;
  const totalDays = getDaysInMonth(month, new Date().getFullYear());
  const unbookedDays = Math.max(totalDays - bookedDays, 0); // Ensure unbookedDays isn't negative

  const data = {
    labels: ['Booked Days', 'Unbooked Days', 'Total Days'],
    datasets: [
      {
        data: [bookedDays, unbookedDays, totalDays],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255,99,132,1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return <div className='flex flex-col justify-center items-center gap-3'>
      <h3 className='font-bold'>Booking Details for Room {roomNo}</h3>
      <h2 className='font-bold'>Month: {month}</h2>
      <Pie data={data} />
    </div>;
};

// Helper function to get the total days in a given month
function getDaysInMonth(monthName, year) {
  const monthIndex = new Date(`${monthName} 1`).getMonth(); // Get month index (0-based)
  return new Date(year, monthIndex + 1, 0).getDate(); // Get the last day of the month
}

export default PieChart;
