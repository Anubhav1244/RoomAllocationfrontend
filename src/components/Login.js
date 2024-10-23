import React, { useState } from 'react';
import { userlogin } from "../services/authApi";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigate=useNavigate()
  const dispatch=useDispatch()
  function handleOnsubmit(e){
    e.preventDefault()
    dispatch(userlogin(email,Password,navigate))
}


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md px-3 py-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-md px-3 py-2 mb-4"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleOnsubmit}
        >
          Login
        </button>
        <div className="text-sm text-blue-500 mt-2">
          <Link to="/forgetpassword">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
