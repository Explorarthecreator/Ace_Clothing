import { useEffect, useState } from "react";
import MiniNav from "../components/MiniNav"
import ProductItem from "../components/ProductItem";
import ProductItemLoader from "../components/ProductItemLoader";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, resetProduct, filterProduct } from "../features/product/productSlice";
import { toast } from "react-toastify";
import EmptyProduct from "../components/EmptyProduct";


function Homepage() {
  const [value,setValue] = useState('all')
  const {isLoading, isError, message, products,filteredItem} = useSelector((state)=>state.product)
  const dispatch = useDispatch()


  const display =(string)=>{
    setValue(string)
    dispatch(filterProduct(string))
  }

  
  useEffect(()=>{
    if(products.length < 1){
      dispatch(fetchProducts())
    }
    dispatch(resetProduct())
 
    if(isError){
      toast.error(message)
    }
  },[products, isError, message, dispatch])

  if(isLoading){
    return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 md:w-4/5 m-auto gap-2 md:gap-1  justify-center">
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
          </div>
  }
  return (
    <div className=" w-11/12 md:w-4/5 m-auto pt-3">
       
        <div className=" md:w-4/5 md:m-auto">
          <MiniNav filterInput={display} value={value}/>
        </div>

        {
          (filteredItem === false && products.length >=1) ?
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 md:gap-1 justify-center">
            {
              products.map((product)=>(
                <ProductItem key={product.id} data={product.data}/>
              ))
            }
          </div>:
          filteredItem === true && <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 md:gap-1 justify-center">
          {
            products.filter((product)=>product.data.tag === value).map((product)=>(
              <ProductItem key={product.id} data={product.data}/>
            ))
          }
        </div>
        }

        {
          (products.length <= 0 || (value !=='all' &&products.filter((product)=>product.data.tag === value).length <=0) )&& <EmptyProduct/>
        }
    </div> 
  )
}

export default Homepage