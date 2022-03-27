import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postSubscribe = createAsyncThunk(
    'subscribe/postSubscribe',
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


const subscribeSlice = createSlice({
    name: 'subscribe',
    initialState: {
        subscribeValue: '',
        status: null,
        error: null
    },
    reducers:{
        setSubscribe: (state, action) => {
            state.subscribeValue = action.payload
        },
    },
    extraReducers: {
        [postSubscribe.pending] : (state) => {
            state.status = 'loading';
            state.error = null
        },
        [postSubscribe.fulfilled] : (state, action) => {
            state.status = 'resolved';
        }, 
        [postSubscribe.rejected] : (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }

});


export const {setSubscribe} = subscribeSlice.actions;
export default subscribeSlice.reducer;

