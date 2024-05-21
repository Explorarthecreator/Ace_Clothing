import { useDispatch, useSelector } from "react-redux"
import { hide} from "../features/cart/cartSlice"
import Cart from "./Cart"
import Order from "./Order"
import { resetStep } from "../features/order/orderSlice"

function FinishOrder() {
    const {cartView} = useSelector((state)=>state.cart)
    const {step} = useSelector((state)=> state.order)
    const dispatch = useDispatch()
  return (
    <div className={`${cartView?'absolute top-0 right-0 h-screen overflow-y-scroll bg-white w-11/12 md:w-3/4 lg:w-1/2':'hidden'}`}>
        <div className="mt-5 flex justify-end px-5">
            <button className="btn bg-black text-white" onClick={()=>{
                dispatch(hide())
                dispatch(resetStep())
                }}>
                Close X
            </button>
        </div>

        <div className="mt-5 w-full">
            <ul className="steps w-11/12 text-black">
                <li data-content={`${step===1?'1':'✓'}`} className={`step ${step ===1?' step-warning':'step-success'}`}>Cart</li>
                <li data-content={`${step<=2?'2':'✓'}`} className={`step ${step >=2&&'step-success'}`}>
                    Shipping
                </li>
                <li data-content="3" className={`step ${step ===3&&'step-success'}`}>
                    Payment
                </li>
            </ul>
        </div>

        {
            step === 1? <Cart/>:
            step === 2? <Order/>:
            step === 3 && <p>Here</p>
        }
        
    </div>
  )
}

export default FinishOrder