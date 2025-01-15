import { createSlice } from "@reduxjs/toolkit"

const bookSlice = createSlice({
name:'book',
initialState:null,
reducers:{
    addBook:(state,action)=>{
        return action.payload;
    },
    removeBook:(state,action)=>{
        return null;
    },
},

});
export const { addBook , removeBook } = bookSlice.actions;
export default bookSlice.reducer;