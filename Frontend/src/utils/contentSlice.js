import { createSlice } from "@reduxjs/toolkit"

const contentSlice = createSlice({
name:'content',
initialState:null,
reducers:{
    addContent:(state,action)=>{
        return action.payload;
    },
    removeContent:(state,action)=>{
        return null;
    },
},

});
export const { addContent , removeContent } = contentSlice.actions;
export default contentSlice.reducer;