import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reset, signup } from '../features/auth/authSlice'
import { FaEnvelope, FaKey, FaUser } from 'react-icons/fa6'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaPhone } from 'react-icons/fa'

function Signup() {
    const [formData, setFormData] = useState({
        email:'',
        firstName:'',
        lastName:'',
        phoneNumber:'',
        password:'',
        password2:''
    })

    const {isLoading, isError, isSuccess, message, loggedIn} = useSelector((state)=> state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { firstName, lastName, phoneNumber, email, password, password2} = formData

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(isSuccess || loggedIn){
            navigate('/')
        }
        dispatch(reset())
    },[isError,isSuccess,message, navigate, dispatch, loggedIn])
    const change = (e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]:e.target.value
        }))
    }
    const submit = (e)=>{
        e.preventDefault()
        if(password !== password2){
            toast.error('Both passwords should be the same')
            return
        }

        if(password2.length>=8 && password2===password){
            dispatch(signup(formData))
        }else if(password2.length<8 || password.length <8){
            toast.error('Password should be up to 8 characters')
            return
        }else{
            toast.error('Not complete data')
            return
        }
        
    }

    if(isLoading){
        console.log('currently loading');
    }
  return (
    <div className="w-11/12 lg:w-1/2 m-auto lg:mt-28 mt-14">
        <form className=' bg-white p-6 rounded-lg shadow-lg w-full lg:w-4/5 m-auto' onSubmit={submit}>
            <h1 className=' mb-5 text-3xl text-black font-bold'>
                Sign Up
            </h1>
            
            <div className=' flex flex-col gap-4'>
                <div>
                    <label className="input input-bordered input-success flex items-center gap-3 bg-white text-black ">
                        <FaUser/>
                        <input type="text" className="grow" placeholder="Enter your first name" id='firstName' value={firstName} onChange={change} required />
                    </label>
                </div>

                <div>
                    <label className="input input-bordered input-success flex items-center gap-3 bg-white text-black ">
                        <FaUser/>
                        <input type="text" className="grow" placeholder="Enter your last name" id='lastName' value={lastName} onChange={change} required />
                    </label>
                </div>

                <div>
                    <label className="input input-bordered input-success flex items-center gap-3 bg-white text-black ">
                        <FaPhone/>
                        <input type='tel' className="grow" placeholder="Enter your phone number" id='phoneNumber' value={phoneNumber} onChange={change} required />
                    </label>
                </div>


                <div>
                    <label className="input input-bordered input-success flex items-center gap-3 bg-white text-black ">
                        <FaEnvelope/>
                        <input type="email" className="grow" placeholder="Enter your email" id='email' value={email} onChange={change} required />
                    </label>
                </div>
                
                <div>
                    <label className={`input input-bordered flex items-center gap-3 bg-white text-black border-black ${password.length>=8?'input-success':'input-error'}`}>
                        <FaKey/>
                        <input type="password" className="grow" placeholder="Enter your password" id='password' value={password} onChange={change} required/>
                    </label>
                </div>

                <div>
                    <label className={`input input-bordered flex items-center gap-3 bg-white text-black border-black ${password2.length>=8 && password2===password?'input-success':'input-error'}`}>
                        <FaKey/>
                        <input type="password" className="grow" placeholder="Confirm your password" id='password2' value={password2} onChange={change} required />
                    </label>
                </div>
                {
                    isLoading? <button className="btn cursor-not-allowed w-full lg:w-2/5 md:w-2/5 m-auto text-white">
                    <span className="loading loading-spinner"></span>
                    loading
                  </button>:
                    <button className={`btn w-full md:w-2/5 md:m-auto text-white bg-black ${(email === '' || password === '' || firstName === ''||lastName===''||phoneNumber==='' || password2 === '')&&'btn-disabled'}`}>
                        Submit
                    </button>
                }
                
            </div>

            <p className='mt-9 text-black'>
                Have an account? <Link className='btn ml-3 text-white bg-black' to={'/login'}>Login</Link>
            </p>

        </form>
    </div>
  )
}

export default Signup