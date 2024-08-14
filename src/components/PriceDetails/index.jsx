import React from "react";
import { useCart } from "../../context/cart-context";
import "./price.css";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";

export const PriceDetails = () => {
  const { cart } = useCart();

  const totalAmount = getTotalCartAmount(cart);
  const delivery = 110;
  return (
    <div className="details w-[500px] bg-white pt-6">
      <div className="flex flex-col gap-5 border-b p-2">
        <div className="flex">
          <p>Price {cart.length} items</p>
          <p className="ml-auto">Rs. {totalAmount}</p>
        </div>
        <div className="flex p-2">
          <p>DeliveryCharge</p>
          <p className="ml-auto">Rs. {delivery}</p>
        </div>
      </div>
      <div className="flex border-w p-4">
        <p>Total Amount</p>
        <p className="ml-auto">Rs {totalAmount + delivery}</p>
      </div>
      <div className=" flex price">
        <button className="  price-btn-primary  d-flex align-center justify-center gap cursor btn-margin p-3 m-2">
          Place Order
        </button>
      </div>
    </div>
  );
};
