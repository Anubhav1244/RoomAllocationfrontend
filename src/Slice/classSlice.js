import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    loading:false,
    ClassBookingdata:null,
};

const classSlice = createSlice({
    name: "class",
    initialState:initialState,
    reducers: {
        SetClassBookingdata(state,value)
        {
            
            state.ClassBookingdata=value.payload
            
        },
        setLoading(state, value) {                     
            state.loading = value.payload;
        },
    },
});

export default classSlice.reducer;
export const { SetClassBookingdata,setLoading } = classSlice.actions;

