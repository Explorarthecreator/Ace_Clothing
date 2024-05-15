import { createSlice } from "@reduxjs/toolkit";

const initialState={
    order:{},
    step: 1,
    isLoading:false,
    isSuccess: false,
    isError: false,
    message:''
}


export const OrderSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        reset:(state)=>initialState,
        resetStep:(state)=>{
            state.step = 1
        },
        increaseStep: (state)=>{
            state.step = state.step+1
        },
        setOrder:(state,action)=>{
            state.order = action.payload
        }
    }
})


export const {reset, increaseStep, setOrder, resetStep} = OrderSlice.actions
export default OrderSlice.reducer