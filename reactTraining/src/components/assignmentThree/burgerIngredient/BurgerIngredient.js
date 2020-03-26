import React from "react";
import PropTypes from "prop-types";
import { burgerAssets } from "./BurgerAssets";

import "./BurgerIngredient.scss";

export default function BurgerIngredient(props) {
  let ingredient = null;

  switch (props.type) {
    case "bread-top":
      ingredient = (
        <div className="BreadTop ingredient animated slideInDown fast">
          <img src={burgerAssets.breadtop} alt="" />
        </div>
      );
      break;
    case "bread-bottom":
      ingredient = (
        <div className="BreadBottom ingredient animated slideInDown faster">
          <img src={burgerAssets.breadbottom} alt="" />
        </div>
      );
      break;
    case "meat":
      ingredient = (
        <div className="Meat ingredient animated slideInDown faster">
          <img src={burgerAssets.meat} alt="" />
        </div>
      );
      break;
    case "lettuce":
      ingredient = (
        <div className="Lettuce ingredient animated slideInDown faster">
          <img src={burgerAssets.lettuce} alt="" />
        </div>
      );
      break;
    case "cheese":
      ingredient = (
        <div className="Cheese ingredient animated slideInDown faster">
          <img src={burgerAssets.cheese} alt="" />
        </div>
      );
      break;
    case "onions":
      ingredient = (
        <div className="Onions ingredient animated slideInDown faster">
          <img src={burgerAssets.onions} alt="" />
        </div>
      );
      break;
      case "pickles":
      ingredient = (
        <div className="Pickles ingredient animated slideInDown faster">
          <img src={burgerAssets.pickles} alt="" />
        </div>
      );
      break;
      case "tomatos":
      ingredient = (
        <div className="Tomatos ingredient animated slideInDown faster">
          <img src={burgerAssets.tomatos} alt="" />
        </div>
      );
      break;
    default:
      ingredient = null;
  }
  return ingredient;
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
