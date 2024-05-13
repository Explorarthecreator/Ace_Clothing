import { useEffect, useState } from "react";
import MiniNav from "../components/MiniNav"
import ProductItem from "../components/ProductItem";
import ProductItemLoader from "../components/ProductItemLoader";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, resetProduct } from "../features/product/productSlice";


function Homepage() {
  const [value,setValue] = useState('all')
  const {isLoading, isError, isSuccess, message, products} = useSelector((state)=>state.product)
  const dispatch = useDispatch()
  const display =(string)=>{
    console.log(string);
    setValue(string)
    // console.log(value);
  }
  useEffect(()=>{
    if(products.length < 1){
      dispatch(fetchProducts())
    }
    dispatch(resetProduct())
    if(isSuccess){
      console.log(products);
    }
    if(isError){
      console.log(message);
    }
  },[products, isError, message,isSuccess, dispatch])
  return (
    <div className=" w-11/12 md:w-4/5 m-auto">
        <h1 className=' text-black'>
            Let's work
        </h1>

        <div className=" md:w-4/5 md:m-auto">
          <MiniNav filterInput={display} value={value}/>
        </div>

        {
          isLoading? 
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 md:gap-1 justify-center">
            <div>
              <ProductItemLoader/>
            </div>
            <div>
              <ProductItemLoader/>
            </div>
            <div className=" hidden md:block">
              <ProductItemLoader/>
            </div>
            <div className=" hidden lg:block">
              <ProductItemLoader/>
            </div>
          </div>:

          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 md:gap-1 justify-center">

            {
              products.map((product)=>(
                <ProductItem key={product.id} data={product.data}/>
              ))
            }
          {/* <ProductItem/> */}
          {/* <ProductItem/> */}
          {/* <ProductItem/> */}
          </div>
        }
{/* 
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 md:gap-1 justify-center">
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
        </div> */}

        {/* <ProductItemLoader/> */}

    </div>
    
  )
}

export default Homepage