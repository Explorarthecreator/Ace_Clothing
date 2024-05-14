import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cart = JSON.parse(localStorage.getItem('cart'))
// localStorage.removeItem('cart')
const initialState = {
    cart:cart? cart :[],
    // message:null
}
// const dispatch = useDispatch()

export const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        reset:(state)=>initialState,
        addItem:(state,action)=>{
            // console.log(action.payload);
            const newCart = action.payload

            if(newCart.size === ''){
                // state.message = 'Please select a size'
                // return false
                toast.error('Please Select a size')
            }else{
                state.message = null
                const  exist = state.cart.find((item)=>item.name === newCart.name )

                if (exist){
                    toast.error('This item already exists in your cart')
                }
                else{
                    // const oldItems = [...cart,newCart]
                    let oldItems
                    if(state.cart.length <=0){
                        oldItems = [newCart]
                        console.log("empty");
                    }
                    else{
                        oldItems = [...state.cart,newCart]
                        console.log("not empty");
                    }
                    localStorage.setItem('cart', JSON.stringify(oldItems))
                    state.cart.push(newCart)
                    console.log(oldItems);
                    toast.success('Cart added')
                }
                // localStorage.setItem('cart', JSON.stringify(action.payload))
                // return true
            }
        }
    },
})

export const {reset, addItem} = CartSlice.actions

export default CartSlice.reducer