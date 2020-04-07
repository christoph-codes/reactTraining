import React, { useState } from 'react';
import './Checkout.scss'
import CheckoutSummary from '../../checkoutSummary/CheckoutSummary';
import ContactData from '../../contactData/ContactData';
import db from '../../firebase/firebaseConfig';

export default function Checkout(props) {
    // Manually setting the ingredient count for testing 
    // const [ingredients,setIngredients] = useState({
    //     lettuce: 1,
    //     tomatos: 1,
    //     pickles: 1,
    //     onions: 1,
    //     cheese: 1,
    //     meat: 1,
    // });
    // const [ingredients,setIngredients] = useState(props.location.state.ingredients);
    // const [totalPrice, setTotalPrice] = useState(props.location.state.totalPrice);
    const ingredients = props.location.state.ingredients;
    const totalPrice = props.location.state.totalPrice;
    const [loading,setLoading] = useState(false);

    const handleCheckoutData = (value) => {
        setLoading(true);
        
        // console.log(value);

        // Group order data with customer data
        let orderData = {
            totalPrice: totalPrice,
            customerData: value,
            ingredients: ingredients
        }

        // console.log(orderData);

        // TODO: Add timestamp to orderData
        
        // Add order data to the database
        db.collection('orders').add({
            ...orderData,
            deliveryMethod: 'rush',
        })
        .then(() => {
            console.log('Confirmed Checkout');
            props.history.push('/assignment3/thank-you', orderData);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })

    }

    const cancelCheckout = () => {
        console.log('...Cancelling Order');
        props.history.goBack();
    }
    return (
        <div className='Checkout'>
            <div className="col2">
            <div className="contact-info">
                    <ContactData checkoutCancelled={cancelCheckout} checkoutConfirmed={handleCheckoutData} ingredients={ingredients}/>
                </div>
                <div className="burger-preview">
                    {
                ingredients ? 
                    <CheckoutSummary ingredients={ingredients} /> :
                    null
                }
                </div>
            </div>
        </div>
    );
}