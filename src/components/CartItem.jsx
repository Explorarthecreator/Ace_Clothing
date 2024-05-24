import {FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import { FaTrash } from "react-icons/fa6"
import { deleteItem } from "../features/cart/cartSlice"
import { useDispatch } from "react-redux"



function CartItem({cart,index, reduceQuantity, increaseQuantity}) {
    const dispatch = useDispatch()
  return (
    <div className=" p-3 bg-[#F2F2F2] text-black flex justify-between">
        <div className="w-3/5">
            <h1 className=" text-xl mb-3 font-medium">
                {
                    cart.name
                }
            </h1>
            <p>
                {
                    cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
                }
            </p>
        </div>

        <div className=" w-2/5 flex flex-col md:flex-row md:items-center md:justify-between items-end gap-3">
            <div className="flex gap-2 items-center">
                {/* <p className=" w-8 h-8 rounded-full text-center hover:cursor-pointer bg-transparent border border-black text-black text-2xl hover:bg-black hover:text-white ">
                    -
                </p> */}
                <FaMinusCircle size={25} className="hover:cursor-pointer bg-transparent text-black hover:bg-black hover:text-white" onClick={()=>reduceQuantity(index,cart.price,cart.quantity)}/>
                <p className="text-xl font-semibold">
                    {
                        cart.quantity
                    }
                </p>
                <FaPlusCircle size={25} className="hover:cursor-pointer bg-transparent text-black hover:bg-black hover:text-white" onClick={()=>increaseQuantity(index,cart.price,cart.quantity)}/>
                
            </div>
            <FaTrash className="cursor-pointer" onClick={()=>dispatch(deleteItem(index))}/>
        </div>
    </div>
  )
}

export default CartItem