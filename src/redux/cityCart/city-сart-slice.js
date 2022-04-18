import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { postCity } from "../thunks";
import axios from "axios";


export const postCity = createAsyncThunk(
    'cityCart/postCity',
    async (city, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.post('https://training.cleverland.by/shop/search/cities', city);
            if(res.status !== 200) {
                throw new Error("ошибка отправки city")
            }
            dispatch(addCityRedux(res.data))
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);


const cityCartSlice = createSlice({
    name: 'cityCart',
    initialState: {
        cityObj: {
            city: '',
            country: ''
        },
        cities: [],
        statusCity: null,
        errorCity: null
    },
    reducers:{
        setCityRedux: (state, action) => {
            state.cityObj.city = action.payload;
        },
        setCountryRedux: (state, action) => {
            state.cityObj.country = action.payload;
        },
        addCityRedux: (state, action) => {
            state.cities = [...action.payload]
        }
    },
    extraReducers: {
        [postCity.pending] : (state) => {
            state.statusCity = 'loading';
            state.errorCity = null
        },
        [postCity.fulfilled] : (state, action) => {
            state.statusCity = 'resolved';
        }, 
        [postCity.rejected] : (state, action) => {
            state.statusCity = 'rejected';
            state.errorCity = action.payload
        }
    }

});


export const {setCityRedux, setCountryRedux, addCityRedux} = cityCartSlice.actions;
export default cityCartSlice.reducer;

