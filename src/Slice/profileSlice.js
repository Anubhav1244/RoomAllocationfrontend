import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")): null,
    loading:false
};

const profileSlice = createSlice({
    name: "profile",
    initialState:initialState,
    reducers: {
        setUser(state, value) {                     // these are the actions that will be called from the components                                 
                                                        // using these actions we can change the state of the store
            state.user = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        }
    },
});

export default profileSlice.reducer;
export const { setUser,setLoading } = profileSlice.actions;