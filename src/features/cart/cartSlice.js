import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart:[]
}

export const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        reset:(state)=>initialState
    }
})

export const {reset} = CartSlice.actions

export default CartSlice.reducer