
import {  useMemo, useState} from "react"
import { useSelector } from "react-redux"

export const useAuthStatus=()=> {
    const [logged, setLogged] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)


    const {loggedIn} = useSelector((state)=>state.auth)
    useMemo(()=>{
        if(loggedIn){
            setLogged(true)
        }else{
            setLogged(false)
        }
        

        setCheckingStatus(false)
    },[loggedIn])
  return {logged, checkingStatus}
}
