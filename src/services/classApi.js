import {setLoading} from "../Slice/classSlice"
import { apiconnector } from "./apiconector"
import {useSelector} from "react-redux"
import { toast } from "react-hot-toast"
import {SetClassBookingdata} from "../Slice/classSlice"


 export function classRoomBooking(token,day,start,end,roomNo,navigate)
{

    return async(dispatch)=>
    {
        console.log("classroombookng",token,day,start, end,roomNo)
        const toastId=toast.loading("Loading...")
        let errorrMessage
        dispatch(setLoading(true))
        try{
            const response=await apiconnector("POST",`http://localhost:5000/api/v1/classroombooking/${roomNo}`,{day,token,start, end})
            console.log(response)
            errorrMessage=response.data.message
            
            if(!response.data.success)
            {
                // toast.error(response.data.message)
                throw new Error(response.data.message)
                
            }
            dispatch(SetClassBookingdata(response.data.response))
            console.log(errorrMessage)
            toast.success("Your Room is Booked Sucessfully")
            toast.dismiss(toastId)
            
            navigate('/dashboard')
        }
        catch(error)
        {
            console.log("ERROR IN GETTING THE CLASSROOM BOOKING....",error)
            toast.dismiss(toastId)
            toast.error(errorrMessage)
        }
        dispatch(setLoading(false))
    }
}

export function CreateRoom(token,
    roomNo,
    floorLocation,
    department,
    Layout,
    capacity,
    projector,
    wifi,
    switchboard,
    description,
    scheduleData)
{
    return async(dispatch)=>
    {
        const toastId=toast.loading("Loading...")
        let errorrMessage
        dispatch(setLoading(true))
        try{
            const response=await apiconnector("POST","http://localhost:5000/api/v1/createRoom",
            {token,roomNo,floorLocation,department,description,Layout,capacity,
            projector,wifi,switchboard,scheduleData
            })
            console.log(response)
            errorrMessage=response.data.message
            if(!response.data.success)
            {
                toast.error(response.data.message)
                throw new Error(response.data.message)
                
            }
            toast.success("Room is Created Sucessfully")
            toast.dismiss(toastId)
            
        }
        catch(error)
        {
            console.log("ERROR IN CREATING THE CLASSROOM BOOKING....",error)
            toast.dismiss(toastId)
            toast.error(errorrMessage)
        }
        dispatch(setLoading(false))
    }
}