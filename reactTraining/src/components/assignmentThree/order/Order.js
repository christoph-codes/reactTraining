import React from 'react';
import './Order.scss'

export default function Order(props) {
    let order = props.data;

    const convertDate = (timestamp) => {
        let date = timestamp.toDate();
        let mm = date.getMonth() + 1;
        let dd = date.getDate();
        let yyyy = date.getFullYear();
        date = mm + "/" + dd + "/" + yyyy;
        return date;
      }

    return (
            <li className="Order">
                    <tr>
                        <td className="order-date">{convertDate(order.dateAdded)}</td>
                        <td className="order-id">{order.id}</td>
                        <td className="order-name">{order.customerData.name}</td>
                        <td className="order-email">{order.customerData.email}</td>
                        <td className="order-address">{order.customerData.address.street}</td>
                        <td className="order-zip">{order.customerData.address.zipCode}</td>
                        <td className="order-price"><sup>$</sup>{order.totalPrice.toFixed(2)}</td>
                        <td className="order-delivery">{order.deliveryMethod}</td>
                    </tr>
            </li>
    )
}