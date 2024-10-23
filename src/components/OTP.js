import React, { useState } from 'react';
import { FaArrowLeft, FaClock } from 'react-icons/fa';
import Otpinput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usersignUp } from '../services/authApi';

function Verifyemail() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Move useNavigate hook here
    const [otp, setOtp] = useState("");
    const { loading, Signupdata } = useSelector((state) => state.auth);
    

    function handleOnsubmit(e) {
        e.preventDefault();
        console.log(Signupdata);
        const { Firstname, Lastname, email, phoneNumber, Password, confirmPassword,Role } = Signupdata;
        if (!Signupdata) {
            navigate('/signup');
        } else {
            console.log('signupdata', Signupdata);
            console.log('otp', otp);
            dispatch(usersignUp(Role,Firstname, Lastname, email,Password, confirmPassword,phoneNumber, otp, navigate)); // Pass navigate as a parameter
        }
    }

    return (
        <div className='flex flex-col w-screen mt-16 h-screen items-center my-auto text-black'>
            <div className='text-richblack-5 text-4xl'>Verify email</div>
            <div className='text-richblack-300'>A verification code has been sent to you. Enter the code below</div>
            <div className='w-screen flex flex-col gap-4 items-center my-aut mt-4'>
                <form onSubmit={handleOnsubmit}>
                    <Otpinput
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => (<input {...props} className=' bg-richblack-800 text-4xl m-2 p-2 rounded-lg' />)}
                        value={otp}
                        onChange={setOtp}
                    />
                    <button className='bg-blue-800 hover:scale-95 transition-all duration-200 
                    w-full mt-5 p-2 rounded-lg text-richblack-900 text-lg' type='submit'>
                        Verify
                    </button>
                </form>
            </div>
            <div className='flex justify-between w-[20%] mt-3'>
                <span className='text-black flex gap-3 items-center'>
                    <FaArrowLeft />
                    Back to login
                </span>
                <div className='flex gap-4 w-[35%] text-black items-center'>
                    <FaClock />
                    Resend it
                </div>
            </div>
        </div>
    );
}

export default Verifyemail;
