import React from "react";
import "./cart.css";
import { useCart } from "../../context/cart-context";

export const CartCard = ({ dish }) => {
  const { cartDispatch } = useCart();

  const onRemoveClick = (dish) => {
    cartDispatch({
      type: "REMOVE_DISH",
      payload: { id: dish.id },
    });
  };
  return (
    <div className="cart-card-container flex flex-row ">
      <div className="cart-card  ">
        <img
          src={dish.img}
          alt={dish.name}
          className=""
        />

        <div className="cart-card-body ">
          <h3>{dish.name}</h3>
          <p>{dish.category}</p>
          <p className="card-price ">Rs. {dish.price}</p>
          <div className="quantity-container gap">
            <p className="q-title">Quantity: </p>
            <div className="count-container   justify-center align-center gap ">
              <span className="count">-</span>
              <span className="count-value">1</span>
              <span className="count">+</span>
            </div>
          </div>
          <button
            onClick={() => onRemoveClick(dish)}
            className="cart-btn-primary"
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
};
