import { useDispatch, useSelector } from "react-redux"
import OrderDetail from "./OrderDetail"
import { FaArrowLeft } from "react-icons/fa"
import { resetStep } from "../features/order/orderSlice"
import { PaystackButton } from "react-paystack"
import { getAuth } from "firebase/auth"
import { clearCart, reset} from "../features/cart/cartSlice"
import { reset as OrderReset, createOrder } from "../features/order/orderSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


function Payment() {
    const {order} = useSelector((state)=>state.order)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const auth = getAuth()


    const paystackConfig = {
        reference: (new Date()).getTime().toString(),
        email: auth.currentUser.email,
        amount: order.total * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
      };
      const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        if(reference.status === 'success'){
            dispatch(createOrder(order))
            dispatch(OrderReset())
            dispatch(reset())
            dispatch(clearCart())
            toast.success('Payment successful')
            navigate('/profile')
        }
      };
  
      const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        // console.log('closed')
      }

      const componentProps = {
        ...paystackConfig,
        text: `Pay #${order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}`,
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };





  return (
    <div className="w-11/12 md:w-4/5 m-auto mt-3 text-blacks">
        <h1 className='text-black text-2xl font-medium my-4'>
          Shipping Address
        </h1>

        <p className="text-black text-lg">
            {
                order.address
            }
        </p>

        <h1 className='text-black text-2xl font-medium my-4'>
          Order Details
        </h1>
        <div className=" flex gap-2 flex-col">
          {
            order.cart.map((singleOrder,index)=>(
              <OrderDetail key={index} singleOrder={singleOrder}/>
            ))
          }
        </div>


        <div className='my-8 flex flex-col gap-3'>
          <PaystackButton {...componentProps} className="btn bg-black border text-white w-full"/>

          <button className="btn bg-transparent border border-black text-black w-full hover:text-white" onClick={()=>dispatch(resetStep())}>
            <FaArrowLeft/> Go Back 
          </button>
        </div>
    </div>
  )
}

export default Payment