import React, { useEffect, useState } from 'react';
import './Orders.scss';
import db from '../../firebase/firebaseConfig';
import Order from '../../order/Order';
import Spinner from '../../UI/spinner/Spinner';

export default function Orders(props) {
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState(true);

    const getOrders = () => {
        db.collection('orders').get().then(snapshot => {
            snapshot.forEach(doc => {
                let order = doc.data();
                order.id = doc.id;
                setOrders(orders => orders.concat(order));
                setLoading(false);
                // console.log(doc.data());
            })
        })
    }

    useEffect(() => {
        getOrders();
    }, [])


let orderList = (
    orders.map(order => {
        return <Order data={order} key={order.id} />
    })
)

    return (
        <div className='Orders'>
            <h1>Orders</h1>
            <ul className="order-data-table">
                <li>
                    <tr>
                        <td className="order-date strong">Order Date</td>
                        <td className="order-id strong">Order ID</td>
                        <td className="order-name strong">Name</td>
                        <td className="order-email strong">Email</td>
                        <td className="order-address strong">Address</td>
                        <td className="order-zip strong">Zip Code</td>
                        <td className="order-price strong">Total Price</td>
                        <td className="order-delivery strong">Delivery Method</td>
                    </tr>
                </li>
                {loading ? <Spinner /> : orderList}
            </ul>
        </div>
    )
}