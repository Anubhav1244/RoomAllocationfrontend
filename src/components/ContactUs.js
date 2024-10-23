import React, { useState } from 'react';

const ContactForm = ({ darkTheme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactNumber:'',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can do something else with the form data here
  };

  return (
    <div className={darkTheme ? "max-w-md mx-auto p-6 bg-[#BB86FC] rounded-lg mt-16" : "max-w-md mx-auto p-6 bg-[#D3D3D3] rounded-lg mt-16"}>
      <form onSubmit={handleSubmit} className="rounded pt-6 pb-8 mb-4">
        <h1 className='font-bold text-4xl p-3 text-[#FE7A36]'>Contact Us</h1>
        <div className="mb-4">
          <label className={darkTheme ? "block text-white text-sm font-bold mb-2" : "block text-black text-sm font-bold mb-2"} htmlFor="name">
            Name
          </label>
          <input
            className={darkTheme ? "shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" : "shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"}
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className={darkTheme ? "block text-white text-sm font-bold mb-2" : "block text-black text-sm font-bold mb-2"} htmlFor="email">
            Email
          </label>
          <input
            className={darkTheme ? "shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" : "shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"}
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
        <label className={darkTheme ? "block text-white text-sm font-bold mb-2" : "block text-black text-sm font-bold mb-2"} htmlFor="number">
            Contact Number
          </label>
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          className={darkTheme ? "shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" : "shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"}
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        </div>
        <div className="mb-6">
          <label className={darkTheme ? "block text-white text-sm font-bold mb-2" : "block text-black text-sm font-bold mb-2"} htmlFor="message">
            Message
          </label>
          <textarea
            className={darkTheme ? "shadow appearance-none border h-[100px] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" : "shadow appearance-none border h-[100px] rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"}
            id="message"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between mt-3">
          <button
            className="bg-[#FE7A36] hover:scale-95 transition-all duration-200 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
