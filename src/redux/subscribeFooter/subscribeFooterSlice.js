import { createSlice } from "@reduxjs/toolkit";
import { postSubscribeFooter } from "../thunks";



const subscribeFooterSlice = createSlice({
    name: 'subscribeFooter',
    initialState: {
        subscribeValueFooter: '',
        status: null,
        error: null
    },
    reducers:{
        setSubscribeFooter: (state, action) => {
            state.subscribeValueFooter = action.payload
        },
    },
    extraReducers: {
        [postSubscribeFooter.pending] : (state) => {
            state.status = 'loading';
            state.error = null
        },
        [postSubscribeFooter.fulfilled] : (state, action) => {
            state.status = 'resolved';
        }, 
        [postSubscribeFooter.rejected] : (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }

});


export const {setSubscribeFooter} = subscribeFooterSlice.actions;
export default subscribeFooterSlice.reducer;

