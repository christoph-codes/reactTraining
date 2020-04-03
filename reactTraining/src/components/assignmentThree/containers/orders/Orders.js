import React, { useEffect, useState } from 'react';
import './Orders.scss';
import db from '../../firebase/firebaseConfig';

export default function Orders(props) {
    const [orders,setOrders] = useState(null);

    const getOrders = () => {
        db.collection('orders').onSnapshot(snapshot => {
            // console.log(snapshot.docs.data)

            snapshot.docs.forEach(doc => {
                let order = doc.data();
                order.id = doc.id;
                setOrders(order);
            });
        })
    }
    useEffect(() => {
        getOrders();
    }, [orders]);
    

    return (
        <div className='Orders'>
        </div>
    )
}