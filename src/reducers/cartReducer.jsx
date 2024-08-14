export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload.dish],
      };
    case "REMOVE_DISH":
      return {
        ...state,
        cart: state.cart.filter((dish) => dish.id !== payload.id),
      };
    default:
      return state;
  }
};
