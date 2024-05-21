


function OrderDetail({singleOrder}) {
  return (
    <div className=''>
        <div className=" bg-[#F2F2F2] text-black flex justify-between items-center h-24 font-medium">
            <div className=' w-4/5 h-full flex gap-2 items-center'>
                <img src={singleOrder.image} alt="" className='h-full w-2/5 md:w-1/3'/>
                <h3>
                    {singleOrder.name}  (x{singleOrder.quantity})
                </h3>
            </div>
            <div className='w-1/5 flex gap-2 items-center'>
                <p>
                    {
                        (singleOrder.price*singleOrder.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
                    }
                </p>
            </div>
        </div>

       
    </div>
  )
}

export default OrderDetail