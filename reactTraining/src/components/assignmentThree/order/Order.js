import React, { Fragment, useState } from 'react';
import './Order.scss';
import Modal from '../UI/modal/Modal';
import Logo from '../assets/logo/Logo';

export default function Order(props) {
    const [orderClicked,setOrderClicked] = useState(false);
    let order = props.data;

    const toggleModal = () => {
        console.log('Toggled')
        setOrderClicked(!orderClicked);
    }

    const ingredients = [];

    for (let ing in order.ingredients) {
        ingredients.push({
            name: ing,
            amount: order.ingredients[ing],
        })
    }

    const convertDate = (timestamp) => {
        let date = timestamp.toDate();
        let mm = date.getMonth() + 1;
        let dd = date.getDate();
        let yyyy = date.getFullYear();
        date = mm + "/" + dd + "/" + yyyy;
        return date;
      }

    return (
        <Fragment>
            { orderClicked &&
                <Modal close={toggleModal}>
                    <div className='order-details'>
                        <h1><Logo/> <span>Order Details</span></h1>
                        <hr/>
                        <h3>{order.id}<span>{convertDate(order.dateAdded)}</span><br/></h3>
                        <hr/>
                        <h4>Customer Details</h4>
                        <p>Name: <span></span><span><strong>{order.customerData.name}</strong></span><br/>
                        Email: <span><strong>{order.customerData.email}</strong></span><br/>
                        Street Address: <span><strong>{order.customerData.address.street}</strong></span><br/>
                        Zip Code: <span><strong>{order.customerData.address.zipCode}</strong></span></p>
                        <hr/>
                        <h4>Order Details</h4>
                        <ul>
                            {ingredients.map(ig => {
                            return <li key={ig.name}>{ig.name}: <span><strong>{ig.amount}</strong></span></li>
                            })}
                        </ul>
                        <p>Total Price <span><strong><sup>$</sup>{order.totalPrice.toFixed(2)}</strong></span></p>
                        <hr/>
                        <button className="btn prime" onClick={(e) => { window.print('.order-details') }} >Print This Page</button>
                        <button className='btn link' onClick={toggleModal}>Close</button>
                    </div>
                </Modal>
            }
            <li className="Order" onClick={toggleModal}>
                <table>
                    <tbody>
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
                    </tbody>
                </table>
            </li>
        </Fragment>
    )
}