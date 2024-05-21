import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { useEffect, useState } from "react"
import { hide, increase, reduce } from "../features/cart/cartSlice"
import { toast } from "react-toastify"
import { increaseStep, setOrder } from "../features/order/orderSlice"
import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import EmptyCart from "./EmptyCart"


function Cart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loggedIn} = useSelector((state)=> state.auth)
    const {cart} = useSelector((state)=>state.cart)
    const [total,setTotalPrice] = useState(()=>{
        let total = 0
        cart.map((item)=>(
            total = total+(Number(item.price)*Number(item.quantity))
        ))
        return total
    })

    useEffect(()=>{
        let total = 0
        cart.map((item)=>(
            total = total+(Number(item.price)*Number(item.quantity))
        ))
        setTotalPrice(total)
    },[cart])

    const reduceQuantity=(index,price,quantity)=>{
        if(quantity === 1){
            toast.warning('You must have one item')
        }else{
            const update = {
                index,
                quantity
            }
            dispatch(reduce(update))
            // setTotalPrice(total-price)
        }
        
    }
    const increaseQuantity = (index,price,quantity)=>{
        if(quantity === 7){
            toast.warning('Mximum umber of items reached')
        }else{
            const update = {
                index,
                quantity
            }
            dispatch(increase(update))
            // setTotalPrice(total+Number(price))
        }
    }
    

    const proceedToCheckout = ()=>{
        if(loggedIn){
            const order ={
                cart,
                total
            }
            dispatch(setOrder(order))
            dispatch(increaseStep())
        }else{
            navigate('/login')
            dispatch(hide())

        }
    }

  return (
    <div className="w-11/12 m-auto mt-3">
        <h1 className=" text-black text-2xl font-medium my-4">
            Cart
        </h1>

        {
            cart.length >=1?
            <div className=" flex gap-2 flex-col">
                {cart.map((cartItem,index)=>(
                    <CartItem cart={cartItem} key={index} index={index} reduceQuantity={reduceQuantity} increaseQuantity={increaseQuantity}/>
                ))} 
            </div>
            :<EmptyCart/>
        }

        <div className={`${cart.length <=0?'hidden':'flex justify-between my-5'}`}>
            <div>
                <h1 className=" text-black text-xl font-medium">
                    Cart Total
                </h1>
                {/* <p>
                    Shipping fee will be added when checking out
                </p> */}
            </div>

            <p className="text-3xl font-bold text-black">
                #{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}
            </p>
        </div>

        <button className={`btn bg-black text-white w-full ${cart.length<=0 && 'hidden'}`} onClick={proceedToCheckout}>
            Proceed to checkout <FaArrowRight/>
        </button>

    </div>
  )
}

export default Cart