import { createSlice } from "@reduxjs/toolkit"

const tokenSlice = createSlice({
name:'token',
initialState:null,
reducers:{
    addToken:(state,action)=>{
        return action.payload;
    },
    removeToken:(state,action)=>{
        return null;
    },
},

});
export const { addToken , removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;