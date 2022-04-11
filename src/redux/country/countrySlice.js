import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllCountry = createAsyncThunk(
    'country/getAllCountry',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.get('https://training.cleverland.by/shop/countries');
            if(res.status !== 200) {
                throw new Error("ошибка")
            }
            dispatch(setCountry(res.data))
            // return res.data
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)



const countrySlice = createSlice({
    name: 'country',
    initialState: {
        allCountry: [],
        status: null,
        error: null
    },
    reducers:{
        setCountry: (state, action) => {
            state.allCountry = action.payload
        },
    },
    extraReducers: {
        [getAllCountry.pending] : (state) => {
            state.status = 'loading';
            state.error = null
        },
        [getAllCountry.fulfilled] : (state, action) => {
            state.status = 'resolved';
            state.allProducts = action.payload
        }, 
        [getAllCountry.rejected] : (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }

});


export const {setCountry} = countrySlice.actions;
export default countrySlice.reducer;

