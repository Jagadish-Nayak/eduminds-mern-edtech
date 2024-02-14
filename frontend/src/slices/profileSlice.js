import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
    loading:false,
}

const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        setUser: (state,value)=>{
            state.cart = value.payload;
        },
        setLoading: (state,value)=>{
            state.loading = value.payload;
        }
    }
})

export const {setUser,setLoading} = userSlice.actions;
export default userSlice.reducer;