import React from 'react'

function ProductItemLoader() {
  return (
    <div className="flex flex-col gap-4 w-40 md:w-52 px-2 lg:w-64 h-80 lg:h-[400px] mt-10">
        <div className="skeleton h-3/5 lg:h-3/4 w-full"></div>
        <div className="skeleton h-4 w-4/5"></div>
        <div className="skeleton h-4 w-2/5 bg-[#787676]"></div>
        <div className="skeleton h-4 w-3/5"></div>
    </div>
  )
}

export default ProductItemLoader