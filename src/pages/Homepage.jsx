import { useState } from "react";
import MiniNav from "../components/MiniNav"
import ProductItem from "../components/ProductItem";

function Homepage() {
  const [value,setValue] = useState('all')
  const display =(string)=>{
    console.log(string);
    setValue(string)
    console.log(value);
  }
  
  return (
    <div className=" w-11/12 md:w-4/5 m-auto">
        <h1 className=' text-black'>
            Let's work
        </h1>

        <div className=" md:w-4/5 md:m-auto">
          <MiniNav filterInput={display} value={value}/>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 md:gap-1 justify-center">
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
        </div>
    </div>
    
  )
}

export default Homepage