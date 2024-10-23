import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")): null,
    loading:false,
    Signupdata:null,
};

const authSlice = createSlice({
    name: "auth",
    initialState:initialState,
    reducers: {
        setSignupdata(state,value)
        {
            
            state.Signupdata=value.payload
            
        },
        setToken(state, value) {                     // these are the actions that will be called from the components
                                                    // using these actions we can change the state of the store
            state.token = value.payload;
        },
        setLoading(state, value) {                     
            state.loading = value.payload;
        },
    },
});

export default authSlice.reducer;
export const { setToken,setSignupdata,setLoading } = authSlice.actions;

