import {setLoading, setToken} from "../Slice/authSlice"
import { apiconnector } from "./apiconector"
import{auth} from "./apis"
import { toast } from "react-hot-toast"
import { setUser } from "../Slice/profileSlice"


 export function getPasswordResetLink(email,setemailSent)
{
    return async(dispatch)=>
    {
        const toastId=toast.loading("Loading...")
        dispatch(setLoading(true))
        try{
            const response=await apiconnector("POST",auth.RESETPASSWORDTOKEN_API,{email})
            console.log(response)
            if(!response.data.success)
            {
                throw new Error(response.data.message)
                
            }
            toast.success("Password reset link has been sent to your email")
            toast.dismiss(toastId)
            setemailSent(true)
            
        }
        catch(error)
        {
            console.log("ERROR IN GETTING THE PASSWORD RESET LINK")
            toast.dismiss(toastId)
            toast.error("Error in getting the password reset link")
        }
        dispatch(setLoading(false))
    }
}

export function fetchingRoomdetails(roomNo)
{
    return async(dispatch)=>
    {
        const toastId=toast.loading("Loading...")
        dispatch(setLoading(true))
        try{
            const response=await apiconnector("GET",`http://localhost:5000/api/v1/${roomNo}`)
            console.log(response)
            if(!response.data.success)
            {
                throw new Error(response.data.message)
                
            }
            toast.success("Room details fetched successfully")
            toast.dismiss(toastId)
            
        }
        catch(error)
        {
            console.log("ERROR IN FETCHING ROOM DETAILS")
            toast.dismiss(toastId)
            toast.error("Error in fetching room details")
        }
        dispatch(setLoading(false))
    }
}

export function userlogin(email, Password, navigate) {
    return async (dispatch) => {
      console.log("email:",email,"password:",Password)
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiconnector("POST","http://localhost:5000/api/v1/login", {
          email,
          Password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Login Successful")
        dispatch(setToken(response.data.token))
        const userImage = response.data?.user?.image
          ? response.data.user.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.Firstname} ${response.data.user.Lastname}`
        dispatch(setUser({ ...response.data.user, image: userImage }))
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
        const User=localStorage.getItem("user")
        console.log("USER:",User)
        console.log(userImage)
        navigate("/dashboard")
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
  
  export function usersignUp(
    Role,
    Firstname,
    Lastname,
    email,
    Password,
    confirmPassword,
    phoneNumber,
    otp,
    navigate
     // Add navigate as a parameter
  ) {
    
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      console.log("firstname:",Firstname,"lastname:",Lastname,"email:",email,"password:",Password,"confirmpassword:",confirmPassword,"accounttype:",Role," contactnumber:",phoneNumber,"otp:",otp)
      dispatch(setLoading(true))
      try {
        
        const response = await apiconnector("POST", 'http://localhost:5000/api/v1/signup', {
          Firstname,
			    Lastname,
			    email,
			    Password,
			    confirmPassword,
			    Role,
			    phoneNumber,
			    otp,
          
        });
        
        console.log("SIGNUP API RESPONSE............", response);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
        toast.success("Signup Successful");
        navigate("/login");
      } 
      catch (error) {
        
        console.log("SIGNUP API ERROR............", error);
        toast.dismiss(toastId);
        toast.error("Signup Failed");
       
        
      }
  
      toast.dismiss(toastId);
      dispatch(setLoading(false));
    };
  }
  

  export function sendOtp(email, navigate) {
    
    return async (dispatch) => {
      const api=auth.SEND_OTP
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      
      try {
        
        const response = await apiconnector("POST",'http://localhost:5000/api/v1/sendotp', {
          email,
          
        })
        console.log("SENDOTP API RESPONSE............", response)
  
        console.log(response.data.success)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("OTP Sent Successfully")
        navigate("/otp")
      } catch (error) {
        
        console.log(api)
        console.log("SENDOTP API ERROR............", error)
        toast.error("Could Not Send OTP")
      }
      console.log(api)
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
  export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      // dispatch(resetCart())
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }