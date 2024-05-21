import emptyCart from '../undraw_empty_cart_co35 (1).svg'

function EmptyCart() {
  return (
    <div className="mt-7 w-4/5 md:w-1/2 lg:w-1/2 m-auto text-center text-black">
        <img src={emptyCart} alt="" />
        <p className=' mt-7 text-2xl '>
            Cart is empty
        </p>
    </div>
  )
}

export default EmptyCart