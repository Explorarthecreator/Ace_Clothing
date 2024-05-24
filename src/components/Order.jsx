import OrderDetail from './OrderDetail'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { increaseStep, resetStep,updateOrder } from '../features/order/orderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaLocationPin } from 'react-icons/fa6'
import { useState } from 'react'
import { toast } from 'react-toastify'

function Order() {
  const {order} = useSelector((state)=>state.order)
  const [address, setAddress] = useState('')
  // const [formData, setFormData] = useState({
  //   address:''
  // })
  const dispatch = useDispatch()
  const printer = ()=>{
    if(address === ''){
      toast.error('Please provide an address')
      return
    }

    const orderUpdate = {
      address,
      total: order.total + 5000

    }
    dispatch(updateOrder(orderUpdate))
    dispatch(increaseStep())
  }
  return (
    <div className='w-11/12 md:w-4/5 m-auto mt-3 text-black'>

        <h1 className='text-black text-2xl font-medium my-4'>
          Shipping Address
        </h1>

        <div>
          <label className="input input-bordered border-black outline-none flex items-center gap-2 bg-white text-black">
            <FaLocationPin/>
            <input type="email" className="grow" placeholder="Enter your address (add state)" id='address' value={address} onChange={(e)=>setAddress(e.target.value)} />
          </label>
        </div>

        <h1 className='text-black text-2xl font-medium my-4'>
            Order Summary
        </h1>

        {/* <OrderDetail/> */}
        <div className=" flex gap-2 flex-col">
          {
            order.cart.map((singleOrder,index)=>(
              <OrderDetail key={index} singleOrder={singleOrder}/>
            ))
          }
        </div>

       


        <h3 className='mt-6 mb-3 text-lg font-semibold'>
          Total Price
        </h3>
        <div className='flex justify-between'>
          <p>
            Order Total
          </p>
          <p className=''>
            {
              order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
            }
          </p>
        </div>

        <div className='flex justify-between '>
          <p>
            Shipping Fee
          </p>
          <p className=''>
            5,000
          </p>
        </div>

        <p className=' text-right text-xl font-semibold'>
          {
            (order.total +5000).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
          }
        </p>


        <div className='my-8 flex flex-col gap-3'>
          <button className="btn bg-black text-white w-full" onClick={printer}>
              Proceed to payment <FaArrowRight/>
          </button>

          <button className="btn bg-transparent border border-black text-black w-full" onClick={()=>dispatch(resetStep())}>
            <FaArrowLeft/> Back to Cart 
          </button>
        </div>
    </div>
  )
}

export default Order