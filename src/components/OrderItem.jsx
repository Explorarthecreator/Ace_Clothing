

function OrderItem({id,order,showModal}) {
  return (
    <div className="bg-white md:cursor-pointer flex items-center justify-between p-3 mt-3 md:w-4/5 lg:w-1/2 m-auto" onClick={()=>showModal(order)}>
        <div className=" text-black">
            <p className=" lg:text-lg font-medium">
                {
                    id 
                }
            </p>
            <div>
                <p>
                    {
                        order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
                    }
                </p>
            </div>
        </div>
        <p className={`badge text-white border-0 ${order.status ==='open'?'bg-warning':order.status === 'pending'?' bg-info': order.status === 'closed'&& 'bg-success'}`}>
            {
                order.status === 'open'? 'Processing':
                order.status === 'pending'? 'Dispatched':
                order.status === 'closed'&& 'Delivered'
            }
        </p>
    </div>
  )
}

export default OrderItem