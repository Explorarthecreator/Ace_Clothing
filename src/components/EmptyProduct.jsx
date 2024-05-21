import emptyProduct from '../undraw_web_shopping_re_owap.svg'

function EmptyProduct() {
  return (
    <div className="mt-7 w-11/12 md:w-4/5 lg:w-1/2 m-auto text-center text-black">
        <img src={emptyProduct} alt="" />
        <p className=' mt-7 text-2xl '>
            No Product Available
        </p>
    </div>
  )
}

export default EmptyProduct