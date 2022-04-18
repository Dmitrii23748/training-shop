import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../thunks";

// export const getAllProducts = createAsyncThunk(
//     'products/getAllProducts',
//     async (_, {rejectWithValue}) => {
//         try {
//             const res = await axios.get('https://training.cleverland.by/shop/products');
//             if(res.status !== 200) {
//                 throw new Error("ошибка")
//             }
//             return res.data
            
//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//     }
// )


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        status: null,
        error: null
    },
    reducers:{
        setProducts: (state, action) => {
            state.allProducts = action.payload
        },
    },
    extraReducers: {
        [getAllProducts.pending] : (state) => {
            state.status = 'loading';
            state.error = null
        },
        [getAllProducts.fulfilled] : (state, action) => {
            state.status = 'resolved';
            state.allProducts = action.payload
        }, 
        [getAllProducts.rejected] : (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }

});


export const {setProducts, setProductsCart} = productsSlice.actions;
export default productsSlice.reducer;

