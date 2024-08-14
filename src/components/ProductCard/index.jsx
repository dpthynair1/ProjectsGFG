import React from "react";
import "./product.css";
import "../../styles/utility.css";
import { useCart } from "../../context/cart-context";
import { findProductInCart } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";

export const DishCard = ({ dish }) => {
  const { cart, cartDispatch } = useCart();
  const navigate = useNavigate();
  const isDishInCart = findProductInCart(cart, dish.id);
  //console.log("isDishInCart", isDishInCart);
  const onCartClick = (dish) => {
    if (!isDishInCart) {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: { dish },
      });
      localStorage.setItem("cart", JSON.stringify([...cart, dish]));
    } else navigate("/cart");
  };
  return (
    <div className="card-vertical  d-flex direction-column shadow">
      <div className="card-image-container">
        <img
          className="card-image shadow-sm ml-0"
          src={dish.img}
          alt={dish.name}
        />
      </div>

      <div className="card-details">
        <div className="card-des">{dish.name}</div>
        <div className="card-description">
          <p className="card-des">{dish.category}</p>
          <p className="card-price">Rs. {dish.price}</p>
        </div>
        <div className="cta-btn">
          <button
            onClick={() => onCartClick(dish)}
            className="button btn-primary btn-icon cart-btn d-flex                        
          align-center justify-center gap cursor btn-margin"
          >
            <span class="material-symbols-outlined text-4xl hover:cursor-pointer">
              {isDishInCart ? "shopping_cart_checkout" : "shopping_cart"}
            </span>
            {isDishInCart ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
