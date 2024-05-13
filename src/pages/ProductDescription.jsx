import { FaArrowLeft } from "react-icons/fa6"
import { Link } from "react-router-dom"
import test from '../test.jpg'
// import model from '../model.jpg'


function ProductDescription() {
  return (
    <div className=" w-11/12 m-auto text-black ">
        <Link to={`/`} className="flex items-center gap-1 mb-5">
            <FaArrowLeft/> Back
        </Link>

        <div className="flex">
            <div className=" md:w-1/2">
                <img src={test} alt="" className=" w-full rounded-md" />
            </div>


            {/* Product Details */}
            <div className="mt-2 flex flex-col gap-2 md:w-1/2 md:py-4 md:px-7">
                <h1 className=" text-3xl font-semibold">
                    Nike Dunks
                </h1>

                <div>
                    <h3 className=" text-xl font-medium">
                        Quantity
                    </h3>
                    <div className="flex gap-4 items-center p-3">
                        <p className=" w-10 h-10 text-center rounded-full hover:cursor-pointer bg-transparent border border-black text-black text-3xl hover:bg-black hover:text-white " onClick={()=>console.log("Minus")}>
                            -
                        </p>
                        <p className="text-xl">
                            5
                        </p>
                        <p className=" w-10 h-10 text-center rounded-full hover:cursor-pointer bg-transparent border border-black text-black text-3xl hover:bg-black hover:text-white" onClick={()=>console.log("Plus")}>
                            +
                        </p>
                    </div>
                </div>
                <p>
                    Its simple and elegant shape makes it perfect for those of you who like you who want minimalist clothes Read More. . .
                </p>

                <p>
                    Tag: Shoes
                </p>
                <div>
                    <h3 className=" text-xl font-medium">
                        Choose Size 
                    </h3>
                    <div className="flex gap-1 p-3">
                        <div>
                            <input type="radio" id="S" name="size" value="S" className="hidden peer" required />
                            <label htmlFor="S" className="inline-flex items-center w-8 h-8 justify-center text-black bg-white border border-gray-400 rounded-full cursor-pointer  peer-checked:bg-black peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">                           
                                <div className="block">
                                    <div className="w-full text-md font-semibold">S</div>
                                </div>    
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="M" name="size" value="M" className="hidden peer" required />
                            <label htmlFor="M" className="inline-flex items-center w-8 h-8 justify-center text-black bg-white border border-gray-400 rounded-full cursor-pointer  peer-checked:bg-black peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">                           
                                <div className="block">
                                    <div className="w-full text-md font-semibold">M</div>
                                </div>    
                            </label>
                        </div>
                    </div>
                </div>

                
                

                <button className="btn btn-md rounded-2xl bg-black text-white  w-full">
                    Add to cart #3,000
                </button>
            </div>
            
        </div>

        
    </div>
  )
}

export default ProductDescription