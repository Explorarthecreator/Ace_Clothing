import { useDispatch, useSelector } from "react-redux"
import { hide } from "../features/cart/cartSlice"
import Cart from "./Cart"


function FinishOrder() {
    const {cartView} = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
  return (
    <div className={`${cartView?'absolute top-0 right-0 h-screen bg-white w-11/12 md:w-3/4 lg:w-1/2':'hidden'}`}>
        <div className="mt-5 flex justify-end px-5">
            <button className="btn bg-black text-white" onClick={()=>dispatch(hide())}>
                Close X
            </button>
        </div>

        <div className="mt-5 w-full">
            <ul className="steps w-11/12 text-black">
                <li data-content="1" className="step step-success">Cart</li>
                <li data-content="2" className="step step-warning">
                    Shipping
                </li>
                <li data-content="3" className="step">
                    Payment
                </li>
            </ul>
        </div>

        <Cart/>
        
    </div>
  )
}

export default FinishOrder