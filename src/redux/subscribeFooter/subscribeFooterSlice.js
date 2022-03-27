import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postSubscribeFooter = createAsyncThunk(
    'subscribeFooter/postSubscribeFooter',
    async (email, {rejectWithValue}) => {
        try {
            const mailData = {
                "mail": email
            }
            const res = await axios.post('https://training.cleverland.by/shop/email', mailData);
            if(res.status !== 200) {
                throw new Error("ошибка отправки email")
            }
            return res.data
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


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

