import { FaCartShopping } from "react-icons/fa6"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


function NavBar() {
    const loggedIn = true
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
                                Hi Emmanuel
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
                    <button className='btn bg-black text-white btn-sm'>
                        Login
                    </button>
                }
                <div className="">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaCartShopping size={30}/>
                            <span className="badge badge-sm text-white indicator-item">
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