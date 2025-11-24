import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./Checkout.scss";
import CheckoutSummary from "../../checkoutSummary/CheckoutSummary";
import ContactData from "../../contactData/ContactData";
import db from "../../firebase/firebaseConfig";

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
	const [ingredients] = useState(props.location.state.ingredients);
	const [totalPrice] = useState(props.location.state.totalPrice);

	// Setting the ingredients and price to variables from the router location passed from burger builder
	// let ingredients = null;
	// let totalPrice = null;
	// if (props.location.state) {
	//     ingredients = props.location.state.ingredients;
	//     totalPrice = props.location.state.totalPrice;
	// }

	const [todaysDate, setTodaysDate] = useState(null);

	// TODO: Add timestamp to orderData
	const getTodaysDate = () => {
		const date = new Date();
		console.log(date);
		setTodaysDate(date);
	};

	useEffect(() => {
		getTodaysDate();
	}, []);

	const handleCheckoutData = (value) => {
		// console.log(value);

		// Group order data with customer data
		let orderData = {
			totalPrice: totalPrice,
			customerData: value,
			ingredients: ingredients,
		};

		// console.log(orderData);

		// Add order data to the database
		db.collection("orders")
			.add({
				...orderData,
				deliveryMethod: "rush",
				dateAdded: todaysDate,
			})
			.then(() => {
				console.log("Confirmed Checkout");
				props.history.push("/assignment3/thank-you", orderData);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const cancelCheckout = () => {
		console.log("...Cancelling Order");
		props.history.goBack();
	};
	return (
		<div className="Checkout">
			<div className="col2">
				<div className="contact-info">
					<ContactData
						checkoutCancelled={cancelCheckout}
						checkoutConfirmed={handleCheckoutData}
						ingredients={ingredients}
					/>
				</div>
				<div className="burger-preview">
					{ingredients ? (
						<CheckoutSummary ingredients={ingredients} />
					) : (
						<Redirect to="/assignment3/burger-builder" />
					)}
				</div>
			</div>
		</div>
	);
}
