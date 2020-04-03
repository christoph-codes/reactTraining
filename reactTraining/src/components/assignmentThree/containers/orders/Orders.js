import React, { useEffect, useState } from 'react';
import './Orders.scss';
import Order from '../../order/Order';
import db from '../../firebase/firebaseConfig';

export default function Orders(props) {
    const [orders,setOrders] = useState([]);

    const getOrders = () => {
        db.collection('orders').onSnapshot(snapshot => {
            return snapshot.docs.map(doc => {
                let order = doc.data();
                order.id = doc.id;
                setOrders(order);
            });
        })
    }
    useEffect(() => {
        getOrders();
    }, [orders]);

    const orderList = () => {
        orders.map(order => {
            return <Order data={order} key={order.id} />
        })
    }

    return (
        <div className='Orders'>
            {orderList}
        </div>
    )
}