import React, { useState, useReducer, Fragment } from "react";
import "./BurgerBuilder.scss";
import BuildControls from "../../buildControls/BuildControls";
import Modal from "../../UI/modal/Modal";

import Burger from "../../burger/Burger";
import OrderSummary from "../../orderSummary/OrderSummary";

// import db from '../../firebase/firebaseConfig';
import Spinner from "../../UI/spinner/Spinner";

import { reducer } from "../../reducers/ingredientReducer";

export default function BurgerBuilder(props) {
  // State
  // const [ingredients, setIngredients] = useState(null);
  const [totalPrice, setTotalPrice] = useState(2);
  const [feedback, setFeedback] = useState("");
  const [purchaseable, setPurchaseable] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    ingredients: {
      lettuce: 0,
      cheese: 0,
      onions: 0,
      pickles: 0,
      tomatos: 0,
      meat: 0
    },
    totalPrice: 2
  });

  // const getIngredients = () => {
  //     console.log('...Getting Prices');
  //     db.collection('counts').doc('ingredients').get()
  //     .then(docs => {
  //         let ingredients = docs.data();
  //         // console.log(ingredients);
  //         setIngredients(ingredients);
  //     })
  // }

  // useEffect(() => {
  //     getIngredients();
  // }, []);

  const toggleModal = () => {
    setModalStatus(!modalStatus);
  };

  const updatePurchaseable = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum >= 1;
  };

  // const addIngredient = type => {
  //     const oldCount = ingredients[type];
  //     const updatedCount = oldCount + 1;
  //     const updatedIngredients = {
  //         ...ingredients
  //     }
  //     updatedIngredients[type] = updatedCount;
  //     const priceAddition = INGREDIENT_PRICES[type];
  //     const oldPrice = totalPrice;
  //     const newPrice = oldPrice + priceAddition;
  //     setTotalPrice(newPrice);
  //     setIngredients(updatedIngredients);
  //     updatePurchaseable(updatedIngredients);
  // }
  // const removeIngredient = type => {
  //     const oldCount = ingredients[type];
  //     let updatedCount;
  //     if(oldCount > 0) {
  //         updatedCount = oldCount - 1;

  //     const updatedIngredients = {
  //         ...ingredients
  //     }
  //     updatedIngredients[type] = updatedCount;
  //     const priceReduction = INGREDIENT_PRICES[type];
  //     const oldPrice = totalPrice;
  //     const newPrice = oldPrice - priceReduction;
  //     setTotalPrice(newPrice);
  //     setIngredients(updatedIngredients);
  //     updatePurchaseable(updatedIngredients);
  //     } else {
  //         setFeedback(`There are no pieces of ${type} on your burger!`);
  //     }
  // }
  const disabledInfo = {
    ...state.ingredients
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  const continueToCheckout = () => {
    let orderData = {
      ingredients: { ...state.ingredients },
      totalPrice: state.totalPrice
    };
    // console.log(orderData);
    props.history.push("/assignment3/checkout", orderData);
  };

  let orderSummary = null;
  let burger = <Spinner />;

  if (state) {
    burger = (
      <Fragment>
        <Burger ingredients={state.ingredients} />
        <h2 className="burger-price">
          Total Price: <sup>$</sup>
          {state.totalPrice.toFixed(2)}
        </h2>
        <BuildControls
          ingredientAdded={ingName =>
            dispatch({ type: "ADD_INGREDIENT", ingredientName: ingName })
          }
          ingredientRemoved={ingName =>
            dispatch({ type: "REMOVE_INGREDIENT", ingredientName: ingName })
          }
          disabled={disabledInfo}
          purchaseable={() => {updatePurchaseable(state.ingredients)}}
        />
      </Fragment>
    );
    orderSummary = (
      <OrderSummary
        close={toggleModal}
        continue={continueToCheckout}
        price={totalPrice.toFixed(2)}
        ingredients={state}
      />
    );
  }

  return (
    <div className="BurgerBuilder">
      {modalStatus && <Modal close={toggleModal}>{orderSummary}</Modal>}
      {burger}
      <button
        disabled={!purchaseable}
        onClick={toggleModal}
        className="cta btn"
      >
        Order Now
      </button>
      {feedback ? <p>{feedback}</p> : null}
    </div>
  );
}
