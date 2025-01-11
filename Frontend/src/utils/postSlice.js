import  { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name : 'post',
    initialState : {
        ownPost : null,
        publicPost : null,
    },
    reducers : {
        addOwnPost : (state,action) => {
            state.ownPost=action.payload ;
        },
        addPublicPost : (state,action) =>{
            state.publicPost = action.payload;
        },
        removeOwnPost:(state,action)=>{
            state.ownPost=null ;
        },
        removePublicPost : (state,action) =>{
            state.publicPost = null;
        },
    }

});

export const { addOwnPost , addPublicPost ,removeOwnPost , removePublicPost } = postSlice.actions;
export default postSlice.reducer;
