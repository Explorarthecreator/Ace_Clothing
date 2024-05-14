import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cart = JSON.parse(localStorage.getItem('cart'))
// localStorage.removeItem('cart')
const initialState = {
    cart:cart? cart :[],
    cartView: false
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
        },
        deleteItem:(state,action)=>{
            const localCart = JSON.parse(localStorage.getItem('cart'))
            console.log(action.payload);
            if(action.payload > -1){
                localCart.splice(action.payload,1)
                // console.log(action.payload.index);
            }
            // localCart[action.payload.index].quantity = action.payload.quantity -1
            // console.log(localCart[action.payload.index].quantity);

            // console.log(localCart);
            state.cart = localCart
            localStorage.setItem('cart',JSON.stringify(localCart))
        },
        show:(state)=>{
            state.cartView = true
        },
        hide:(state)=>{
            state.cartView = false
        },
        reduce:(state,action)=>{
            // console.log(state.cart[action.payload.index].quantity)
            // console.log(action.payload.quantity)
            state.cart[action.payload.index].quantity = action.payload.quantity-1
            
            const localCart = JSON.parse(localStorage.getItem('cart'))
            // console.log(localCart);
            // console.log(localCart[action.payload.index].quantity);
            localCart[action.payload.index].quantity = action.payload.quantity -1
            // console.log(localCart[action.payload.index].quantity);

            localStorage.setItem('cart',JSON.stringify(localCart))

            // console.log(localCart);
        },
        increase:(state,action)=>{
            state.cart[action.payload.index].quantity = action.payload.quantity +1
            const localCart = JSON.parse(localStorage.getItem('cart'))
            // console.log(localCart);
            // console.log(localCart[action.payload.index].quantity);
            localCart[action.payload.index].quantity = action.payload.quantity +1
            // console.log(localCart[action.payload.index].quantity);

            localStorage.setItem('cart',JSON.stringify(localCart))
        }
    },
})

export const {reset, addItem,show,hide,reduce,increase, deleteItem} = CartSlice.actions

export default CartSlice.reducer