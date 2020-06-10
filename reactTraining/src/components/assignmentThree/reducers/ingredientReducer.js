const INGREDIENT_PRICES = {
    lettuce: 0.1,
    cheese: 0.5,
    onions: 0.5,
    pickles: 0.2,
    tomatos: 0.2,
    meat: 5,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
        console.log('Ingredient Added')
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: (state.ingredients[action.ingredientName] + 1)
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case "REMOVE_INGREDIENT":
      console.log('Ingredient Removed')
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    default:
      return state;
  }
};
