export const findProductInCart = (cart, id) =>
  cart?.length > 0 && cart.some((dish) => dish.id === id);
