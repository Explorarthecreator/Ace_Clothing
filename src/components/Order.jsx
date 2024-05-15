import React from 'react'
import OrderDetail from './OrderDetail'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { increaseStep, resetStep } from '../features/order/orderSlice'
import { useDispatch, useSelector } from 'react-redux'

function Order() {
  const {order} = useSelector((state)=>state.order)
  const dispatch = useDispatch()
  return (
    <div className='w-11/12 m-auto mt-3 text-black'>
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

        <div className='flex justify-between my-6 text-lg font-medium'>
          <p className='text-lg font-medium'>
            Shipping Fee
          </p>
          <p>
            0
          </p>
        </div>

        <div className='flex justify-between text-xl font-semibold'>
          <h3 className=''>
            Total Price
          </h3>
          <p className=''>
            {
              order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
            }
          </p>
        </div>


        <div className='my-8 flex flex-col gap-3'>
          <button className="btn bg-black text-white w-full" onClick={()=>dispatch(increaseStep())}>
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