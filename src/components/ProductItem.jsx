import { Link } from 'react-router-dom'
import test from '../test.jpg'
import { setProduct } from '../features/product/productSlice'
import { useDispatch } from 'react-redux'

function ProductItem({data}) {
    const dispatch = useDispatch()
  return (
    <div className=" rounded-md w-40 md:w-52 px-2 lg:w-64 h-80 lg:h-[500px] pb-3 text-black mt-7 hover:shadow-2xl">
        <Link to={'/description'} onClick={()=>dispatch(setProduct(data))}>
        <figure className=' h-3/5 lg:h-3/4'><img src={test} className='h-full w-full rounded' alt="Shoes" /></figure>
        <div className="">
            <h2 className=" text-2xl font-medium">
                {
                    data.name
                }
            </h2>
            <p>
                {
                    data.tag
                }
            </p>
            <p className='text-xl'> 
                # {
                    data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
                }
            </p>
            {/* <div className="">
                <button className="btn bg-transparent border border-black text-black btn-sm w-full mt-2">
                    Add to Cart
                </button>
            </div> */}
        </div>
        </Link>
    </div>
  )
}

export default ProductItem