import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase.config'

const initialState = {
    products:[],
    product:{},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message:'',
    quantity:1
}

export const fetchProducts = createAsyncThunk('product/getAll',async(thunkAPI)=>{
    try {
        const docRef = collection(db,'products')

        const docSnap = await getDocs(docRef) 

        const products = []

        docSnap.forEach((data)=>{
            products.push({
                id: data.id,
                data: data.data()
            })
        })

        return products
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const ProductSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        reset:(state)=>initialState,
        setProduct: (state,getr)=>{
            state.product = getr.payload
        },
        resetProduct:(state)=>{
            state.product = {}
            state.quantity = 1
        },
        reduce:(state)=>{
            if(state.quantity ===1){
                state.quantity = 1
            }else{
                state.quantity -=1
            }
            
        },
        add:(state)=>{
            if(state.quantity === 7){
                state.quantity = 7
            }else{
                state.quantity +=1
            }
            
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.message = action.payload
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.products = action.payload
        })
    }
})

export const {reset, setProduct,reduce,add,resetProduct} = ProductSlice.actions

export default ProductSlice.reducer