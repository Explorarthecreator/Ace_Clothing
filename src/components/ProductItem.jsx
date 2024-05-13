import { Link } from 'react-router-dom'
import test from '../test.jpg'

function ProductItem() {
  return (
    <div className=" rounded-md w-40 md:w-52 px-2 lg:w-64 h-80 lg:h-[500px] pb-3 text-black mt-7 hover:shadow-2xl hover:bg-slate-300">
        <figure className=' h-3/5 lg:h-3/4'><img src={test} className='h-full w-full rounded' alt="Shoes" /></figure>
        <div className="">
            <Link to={'/description'}>
            <h2 className=" text-2xl font-medium">
                Nike dunks
            </h2>
            <p>
                Shoe
            </p>
            <p className='text-xl'> 
                #40,000
            </p>
            </Link>
            {/* <div className="">
                <button className="btn bg-transparent border border-black text-black btn-sm w-full mt-2">
                    Add to Cart
                </button>
            </div> */}
        </div>
    </div>
  )
}

export default ProductItem