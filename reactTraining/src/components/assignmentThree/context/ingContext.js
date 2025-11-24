import React, { useState, useEffect, useCallback } from "react";
import db from "../firebase/firebaseConfig";

export const IngContext = React.createContext();

export const IngProvider = ({ children }) => {
	console.log("Getting the context");
	const [stuff, setStuff] = useState({
		ingredients: {},
		totalPrice: 2,
		error: false,
	});

	const getIngredients = useCallback(
		(isMounted) => {
			console.log("...Getting Prices");
			db.collection("counts")
				.doc("ingredients")
				.get()
				.then((docs) => {
					// let ingredients = docs.data();
					// console.log(ingredients);
					if (isMounted.current) {
						const raw = docs.data() || {};
						const allKeys = [
							"lettuce",
							"cheese",
							"onions",
							"pickles",
							"tomatos",
							"meat",
						];
						const normalized = {};
						allKeys.forEach((key) => {
							normalized[key] = typeof raw[key] === "number" ? raw[key] : 0;
						});
						setStuff({
							...stuff,
							ingredients: normalized,
						});
					}
				});
		},
		[stuff.ingredients]
	);

	useEffect(() => {
		const isMounted = { current: true };
		getIngredients(isMounted);
		return () => {
			isMounted.current = false;
		};
	}, []);

	return (
		<IngContext.Provider
			value={{
				stuff,
				setStuff,
			}}
		>
			{children}
		</IngContext.Provider>
	);
};
