import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slice/authSlice";
import profileReducer from "../Slice/profileSlice";
import classReducer from "../Slice/classSlice";

const rootReducer = combineReducers({   //combine all the reducers here 

        auth: authReducer,
        profile:profileReducer,
        class:classReducer
    });
export default rootReducer;