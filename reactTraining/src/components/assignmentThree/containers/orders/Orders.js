import React, { useEffect, useState } from 'react';
import './Orders.scss';
import db from '../../firebase/firebaseConfig';
import Order from '../../order/Order';

export default function Orders(props) {
    const [orders,setOrders] = useState(null);

    const getOrders = () => {
        db.collection('orders').onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                let order = doc.data();
                order.id = doc.id;
                // console.log(order.price)
                setOrders(order);
            });
        })
    }
    useEffect(() => {
        getOrders();
    }, [orders]);

    const orderList = () => {
        if (orders) {
            return (
                orders.map(order => {
                    return <Order data={order} key={order.id} />
                })
            )
        }
    }

    return (
        <div className='Orders'>
            <h1>Orders</h1>
            {orderList}
        </div>
    )
}