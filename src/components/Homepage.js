import React, { useState } from 'react';
import imglogo from '../assest/mca-banner.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageSlider from './ImageSlider';
import Header from './Header';
import Contact from "./ContactUs";
import Footer from './Footer';
import ContactForm from './ContactUs'; // Import ContactForm

function Homepage() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "bg-[#121212] text-[#E0E0E0]" : "bg-[#FFFFFF] text-[#000000]"}>
    
      <button 
        onClick={toggleTheme}
        className="fixed top-4 right-4 bg-[#BB86FC] text-[#121212] p-2 rounded">
        Toggle Theme
      </button>

      {/* Carousel Section */}
      {/* Uncomment and update the Carousel component if needed */}

      {/* Scrollable Picture Section */}
      <div className="flex items-center h-30 mt-0">
        <img src={imglogo} alt="rns-building" className='shadow-[0_20px_50px_rgba(255,255,255,0.7)] ml-4 w-1/2' />
        <div className={darkTheme ? "bg-[#1E1E1E] p-6 ml-4 flex-1 mr-4" : "bg-[#F0F0F0] p-6 ml-4 flex-1 mr-4"}>
          <h2 className="text-[#BB86FC] font-medium text-3xl p-3">Vision</h2>
          <li>Preparing Better Computer Professionals for a Real World.</li>
          <h2 className="text-[#BB86FC] font-medium text-3xl p-3">Mission</h2>
          <li>Imparting solid foundations and applied aspects in both Computer Science Theory and Programming practices.</li>
          <li>Providing training and encouraging R & D and Consultancy Services in frontier areas of Computer Science and Engineering with a Global outlook.</li>
          <li>Fostering the highest ideals of ethics, values and creating awareness of the role of Computing in Global Environment</li>
          <li>Educating and preparing the graduates, highly sought after, productive, and well-respected for their work culture</li>
          <li>Supporting and inducing lifelong learning</li>
        </div>
      </div>

      {/* Four Boxes */}
      <div className="flex font-madeFor mt-16 gap-7">
        <div className={darkTheme ? "w-1/3 bg-[#333333] h-auto flex flex-col gap-2 items-left p-6 flex-1 hover:scale-95 transition-all duration-200 rounded-lg ml-4" : "w-1/3 bg-[#E0E0E0] h-auto flex flex-col gap-2 items-left p-6 flex-1 hover:scale-95 transition-all duration-200 rounded-lg ml-4"}>
          <h2 className='text-[#BB86FC] font-medium text-3xl'>Program Specific Objectives (PSOs)</h2>
          <li className='text-1xl' typeof='square'>Solid foundation in the principles and practices of computer science, including mathematics, science, and basic engineering for design, develop, test, and maintain Hardware/Software Systems.</li>
        </div>
        
        <div className={darkTheme ? "w-1/3 bg-[#1E1E1E] h-auto flex flex-col gap-2 items-left p-6 flex-1 shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] hover:scale-95 transition-all duration-200 rounded-lg" : "w-1/3 bg-[#F5F5F5] h-auto flex flex-col gap-2 items-left p-6 flex-1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-95 transition-all duration-200 rounded-lg"}>
          <h2 className='text-[#BB86FC] font-medium text-3xl'>Program Outcomes (POs)</h2>
          <li className='text-1xl' typeof='square'>Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
        </div>
        
        <div className={darkTheme ? "w-1/3 bg-[#333333] h-auto flex flex-col gap-2 items-left p-6 flex-1 shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] hover:scale-95 transition-all duration-200 rounded-lg mr-4" : "w-1/3 bg-[#E0E0E0] h-auto flex flex-col gap-2 items-left p-6 flex-1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-95 transition-all duration-200 rounded-lg mr-4"}>
          <h2 className='text-[#BB86FC] font-medium text-3xl'>Programme Educational Objectives (PEOs)</h2>
          <li className='text-1xl'>Demonstrate their expertise in solving contemporary problems through design, analysis, implementation and evaluation of hardware and software systems.</li>
        </div>
      </div>

      <ContactForm darkTheme={darkTheme} /> {/* Pass darkTheme as a prop */}
      <Footer />
    </div>
  );
}

export default Homepage;
