import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchOrders } from "../features/order/orderSlice"
import OrderList from "../components/OrderList"
import BoxSpinner from "../components/BoxSpinner"


function Profile() {
  const {id} = useSelector((state)=>state.auth)
  const {orders, isLoading} = useSelector((state)=>state.order)
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(fetchOrders(id))
  },[dispatch,id])

  if(isLoading){
    return <BoxSpinner col={"black"}/>
  }
  return (
    <div className="w-11/12 md:w-4/5 m-auto">
      {
        orders.length >=1 && <OrderList orders={orders}/>
      }
    </div>
  )
}

export default Profile