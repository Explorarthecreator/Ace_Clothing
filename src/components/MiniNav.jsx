import { BiMenu } from "react-icons/bi"
import { FaShirt } from "react-icons/fa6"
import { GiConverseShoe, GiDress, GiHighHeel, GiHoodie, GiTrousers, GiWatch } from "react-icons/gi"


function MiniNav({filterInput, value}) {
  return (
    <div className="carousel gap-2 md:gap-4 w-full px-1">
        <button className={`btn outline-none btn-outline border-black text-black hover:text-white hover:bg-black ${value === 'all'&&'bg-black text-white'} btn-sm carousel-item hover:bg-transparent hover:text-black`} onClick={()=>filterInput('all')}>
            <BiMenu size={25}/> All Items
        </button>
        <button className={`btn outline-none btn-outline border-black text-black hover:text-white hover:bg-black btn-sm carousel-item ${value === 'shoe' &&'bg-black text-white hover:bg-transparent hover:text-black'}`} onClick={()=>filterInput('shoe')}>
            <GiConverseShoe size={25}/> Shoe
        </button>
        <button className={`btn outline-none btn-outline border-black text-black hover:text-white hover:bg-black btn-sm carousel-item ${value === 't-shirt' &&'bg-black text-white hover:bg-transparent hover:text-black'}`} onClick={()=>filterInput('t-shirt')}>
            <FaShirt size={25}/> T-Shirt
        </button>
        <button className={`btn outline-none btn-outline border-black text-black hover:text-white hover:bg-black btn-sm carousel-item ${value === 'trousers' &&'bg-black text-white hover:bg-transparent hover:text-black'}`} onClick={()=>filterInput('trousers')}>
            <GiTrousers size={25}/> Trousers
        </button>
        <button className={`btn outline-none btn-outline border-black text-black hover:text-white hover:bg-black btn-sm carousel-item ${value === 'heels' &&'bg-black text-white hover:bg-transparent hover:text-black'}`} onClick={()=>filterInput('heels')}>
            <GiHighHeel size={25}/> Heels
        </button>
        <button className={`btn outline-none btn-outline border-black text-black hover:text-white hover:bg-black btn-sm carousel-item ${value === 'watch' &&'bg-black text-white hover:bg-transparent hover:text-black'}`} onClick={()=>filterInput('watch')}>
            <GiWatch size={25}/> Watch
        </button>
        <button className={`btn outline-none btn-outline border-black text-black hover:text-white hover:bg-black btn-sm carousel-item ${value === 'gown' &&'bg-black text-white hover:bg-transparent hover:text-black'}`} onClick={()=>filterInput('gown')}>
            <GiDress size={25}/> Gown
        </button>
        <button className={`btn outline-none btn-outline border-black text-black hover:text-white hover:bg-black btn-sm carousel-item ${value === 'hoodie' &&'bg-black text-white hover:bg-transparent hover:text-black'}`} onClick={()=>filterInput('hoodie')}>
            <GiHoodie size={25}/> Hoodie
        </button>

    </div>
  )
}

export default MiniNav