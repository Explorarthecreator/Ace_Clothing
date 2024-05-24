import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase.config";
import { toast } from "react-toastify";

const initialState={
    orders:[],
    order:{},
    step: 1,
    isLoading:false,
    isSuccess: false,
    isError: false,
    message:''
}

export const createOrder = createAsyncThunk('order/create',async(orderData,thunkAPI)=>{
    try {
        await addDoc(collection(db,'orders'),orderData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const fetchOrders = createAsyncThunk('order/getAll', async(id,thunkAPI)=>{
    try {
        const orderRef = collection(db,'orders')

        const q = query(orderRef, where('userRef','==',id))

        const querySnap = await getDocs(q)

        let orders = []

        querySnap.forEach((order)=>{
            orders.push({
                id: order.id,
                data: order.data()
            })
        })

        return orders
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const OrderSlice = createSlice({
    name:'order',
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
        },
        updateOrder:(state,action)=>{
            state.order.address = action.payload.address
            state.order.total = action.payload.total
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createOrder.pending,()=>{
            toast.info('Creating order')
        })
        .addCase(createOrder.fulfilled,()=>{
            toast.success('Order created successfully')
        })
        .addCase(fetchOrders.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(fetchOrders.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.message = action.payload
        })
        .addCase(fetchOrders.fulfilled,(state,action)=>{
            state.isLoading = false
            state.orders = action.payload
        })
    }
})


export const {reset, increaseStep, setOrder, resetStep,updateOrder} = OrderSlice.actions
export default OrderSlice.reducer