import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postCity = createAsyncThunk(
    'cityCart/postCity',
    async (city, {rejectWithValue, dispatch}) => {
        try {
            // const cityData = {...city}
            const res = await axios.post('https://training.cleverland.by/shop/search/cities', city);
            if(res.status !== 200) {
                throw new Error("ошибка отправки city")
            }
            dispatch(addCityRedux(res.data))
            // console.log(res.data);
            // return res.data
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const cityCartSlice = createSlice({
    name: 'cityCart',
    initialState: {
        cityObj: {
            city: '',
            country: ''
        },
        cities: [],
        status: null,
        error: null
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
            state.status = 'loading';
            state.error = null
        },
        [postCity.fulfilled] : (state, action) => {
            state.status = 'resolved';
        }, 
        [postCity.rejected] : (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }

});


export const {setCityRedux, setCountryRedux, addCityRedux} = cityCartSlice.actions;
export default cityCartSlice.reducer;

