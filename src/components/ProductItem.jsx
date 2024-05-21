import { Link } from 'react-router-dom'
import { setProduct } from '../features/product/productSlice'
import { useDispatch } from 'react-redux'

function ProductItem({data}) {
    const dispatch = useDispatch()
  return (
    <div className=" rounded-md w-40 md:w-52 px-2 lg:w-64 m-auto h-72 lg:h-[350px] pb-3 text-black mt-7 hover:shadow-2xl border border-black">
        <Link to={'/description'} onClick={()=>dispatch(setProduct(data))}>
        <figure className=' h-3/5 lg:h-3/4'><img src={data.image} className='h-full w-full rounded' alt="Shoes" /></figure>
        <div className=" pt-4">
            <h2 className=" text-lg lg:text-xl font-medium">
                {
                    data.name
                }
            </h2>
            <p className=''>
                {
                    data.tag
                }
            </p>
            <p className='text-md lg:text-lg'> 
                # {
                    data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
                }
            </p>
            
        </div>
        </Link>
    </div>
  )
}

export default ProductItem