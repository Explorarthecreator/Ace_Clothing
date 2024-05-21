import { FaCartShopping } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
// import FinishOrder from "./FinishOrder"
import { show } from "../features/cart/cartSlice"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"


function NavBar() {
    const dispatch = useDispatch()
    const location = useLocation()
    const auth = getAuth()
    const [name,setName] = useState('')
    const {loggedIn} = useSelector((state)=>state.auth)
    const  pathMatchRoute =(route)=>{
        if(route=== location.pathname){
            console.log("object");
            return true
        }
    }
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setName(user.displayName)
            }else{
                setName('Anon')
            }
        })
    },[auth])
    const {cart} = useSelector((state)=>state.cart)
  return (
    <nav className='w-full overflow-hidden bg-white shadow-xl text-black p-2 fixed top-0 left-0'>
        <div className="navbar md:w-11/12 md:m-auto p-1">
            <div className="flex-1">
                <Link className="text-xl font-encode font-semibold">
                    Ace-clothing
                </Link>
            </div>
            <div className="flex-none">
                {
                    loggedIn? 
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className='flex items-center btn btn-ghost' role="button">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <p className=' hidden md:block'>
                                Hi {
                                    name? name : ''
                                }
                            </p>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-40">
                            <li>
                                <Link>
                                    Profile
                                </Link>
                            </li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>:
                    <Link className={`btn flex items-center bg-black text-white btn-sm ${pathMatchRoute('/login')?'hidden':'block'}`} to={'/login'}>
                        Login
                    </Link>
                }
                <div className={`${pathMatchRoute('/login')?'hidden':'block'}`}>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={()=>dispatch(show())}>
                        <div className="indicator">
                            <FaCartShopping size={30}/>
                            <span className="badge badge-sm text-white bg-black indicator-item">
                                {
                                    cart.length
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar