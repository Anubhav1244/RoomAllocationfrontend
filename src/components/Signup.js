import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import  {setSignupdata} from "../Slice/authSlice"
import { sendOtp } from "../services/authApi"
function SignUpPage() {
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    phoneNumber: "",
    Password: "",
    confirmPassword: "",
    Role:""
  });
  const dispatch=useDispatch()
  const navigate = useNavigate()
  function handleOnChange(e) {
    setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
    }));
  }
  const handleSignUp = async (e) => {
    // Send signup details to backend
    e.preventDefault()

  if (Password !== confirmPassword) {
    toast.error("Passwords Do Not Match")
    return
  }
  const signupData = {
    ...formData,
   
  }

  // Setting signup data to state
  // To be used after otp verification

  console.log(signupData)
  dispatch(setSignupdata(signupData))
  // Send OTP to user for verification
  dispatch(sendOtp(formData.email, navigate))

  // Reset
  setFormData({
    FirstName: "",
    LastName: "",
    email: "",
    phoneNumber:"",
    Password: "",
    confirmPassword: "",
    role:"",
  })
  
  navigate("/otp")

    
  };
  const { Firstname, Lastname, email, phoneNumber, Password, confirmPassword,Role } = formData;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96 mt-16">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <input
              type="text"
              name='Firstname'
              placeholder="First Name"
              className="w-full border rounded-md px-3 py-2"
              value={Firstname}
              onChange={handleOnChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <input
              type="text"
              name='Lastname'
              placeholder="Last Name"
              className="w-full border rounded-md px-3 py-2"
              value={Lastname}
              onChange={handleOnChange}
            />
          </div>
        </div>
        
        <input
          type="email"
          name='email'
          placeholder="Email"
          className="w-full border rounded-md px-3 py-2 mb-4"
          value={email}
          onChange={handleOnChange}
        />
        <input
          type="password"
          name='Password'
          placeholder="Password"
          className="w-full border rounded-md px-3 py-2 mb-4"
          value={Password}
          onChange={handleOnChange}
        />
        <input
          type="password"
          name='confirmPassword'
          placeholder="Confirm Password"
          className="w-full border rounded-md px-3 py-2 mb-4"
          value={confirmPassword}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Contact Number"
          className="w-full border rounded-md px-3 py-2 mb-4"
          value={phoneNumber}
          onChange={handleOnChange}
        />
        <div className="mb-4">
          <select
            className="w-full border rounded-md px-3 py-2"
            value={Role}
            name="Role"
            onChange={handleOnChange}
          >
            <option value="">Select Account Type</option>
            <option value="HOD">HOD</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
