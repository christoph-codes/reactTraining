import React, { useState, useEffect } from "react";
import db from '../firebase/firebaseConfig';

export const IngContext = React.createContext();

export const IngProvider = ({ children }) => {
  console.log("Getting the context");
  const [stuff, setStuff] = useState({
    ingredients: null,
    totalPrice: 2,
    error: false
  });

  const getIngredients = () => {
    console.log("...Getting Prices");
    db.collection("counts")
      .doc("ingredients")
      .get()
      .then(docs => {
        let ingredients = docs.data();
        // console.log(ingredients);
        setStuff(stuff.ingredients);
      });
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <IngContext.Provider
      value={{
        stuff,
        setStuff
      }}
    >
      {children}
    </IngContext.Provider>
  );
};
