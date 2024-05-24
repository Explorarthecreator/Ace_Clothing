import { useDispatch, useSelector } from "react-redux"
import OrderItem from "./OrderItem"
import { setOrder } from "../features/order/orderSlice"


function OrderList({orders}) {
    const {order} = useSelector((state)=>state.order)
    const dispatch = useDispatch()

    const showModal = (order)=>{
        document.getElementById('viewOrderModal').showModal()
        dispatch(setOrder(order))
    }

  return (
    <div className="">
        <h1 className="text-black text-2xl font-medium">
            My Orders
        </h1>

        {
            orders.map((order)=>(
                <OrderItem key={order.id} id={order.id} order={order.data} showModal={showModal}/>
            ))
        }


        <dialog id="viewOrderModal" className="modal">
            <div className="modal-box bg-white">
                
                <p className={`badge text-white mb-2 border-0 ${order.status ==='open'?'bg-warning':order.status === 'pending'?' bg-info': order.status === 'closed'&& 'bg-success'}`}>
                    {
                        order.status === 'open'? 'Processing':
                        order.status === 'pending'? 'Dispatched':
                        order.status === 'closed'&& 'Delivered'
                    }
                </p>

                <h3 className="font-bold text-2xl text-black">
                    Order Details
                </h3>

                <p className="my-3">
                    {
                        order.status === 'open'? "We've received your order and we are processing it for you":
                        order.status === 'pending'? "We've sent out your order and it would be delivered soon to you":
                        order.status === 'closed'&& "Your order has been completed. Thank you for choosing Ace Clothing!"
                    } 
                </p>
            
                <div className=" flex gap-2 flex-col my-2">
                        {order.cart?.map((cartItem,index)=>(
                            <div className=" p-3 bg-[#F2F2F2] text-black flex justify-between" key={index}>
                                <div className="w-full flex justify-between items-center">
                                    <h1 className=" text-lg font-medium">
                                        {
                                            `${cartItem.name}(x${cartItem.quantity})`
                                        }
                                    </h1>
                                    <p>
                                        {
                                            (cartItem.price * cartItem.quantity)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
                                        }
                                    </p>
                                </div>
                            </div>
                        ))} 
                </div>

                <div className=" my-4 flex justify-between text-xl font-medium text-black">
                    <h3 className="">
                        Total <span className="text-xs">(plus delivery)</span>
                    </h3>
                    <p>
                        {
                            order.total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
                        }
                    </p>
                </div>


                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-outline text-black hover:bg-black hover:text-white">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
  )
}

export default OrderList