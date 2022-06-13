import "../styles/order.css";
import React, { useState,useEffect } from 'react';
import {useStateValue} from "../StateProvider";
import {db} from "../firebase";
import Order from "./Order";

function Orders() {
	const [{basket,user},dispatch] = useStateValue();
	const [orders,setOrders] = useState([]);

	useEffect(() => {
		console.log("Orders user",user?.uid);
		if(user){
			db
			.collection("users")
			.doc(user?.uid)
			.collection("orders")
			.orderBy("created","desc")
			.onSnapshot(snapshot =>(
				setOrders(snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data()
				})))
			))
		}else{
			setOrders([]);
		}
	}, [user])
	console.log("O_R_D_E_R_S:",orders);
	
  return (
	<div className="orders">
		<h1>Your Orders</h1>
		<div className="orders_order">
			{console.log(orders)}
			{orders?.map(order =>(
				<Order order = {order}/>
			))}
		</div>
	</div>
  )
}

export default Orders