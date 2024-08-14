import React from "react";
import { Navbar } from "../../components/Navbar";
import { CartCard } from "../../components/CartCard";
import { useCart } from "../../context/cart-context";
import { PriceDetails } from "../../components/PriceDetails";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  console.log("cart", cart);
  return (
    <>
      <Navbar />

      <main className="  bg-[#fafafa]">
        <div className="flex justify-evenly gap-8">
          <>
            {cart.length > 0 ? (
              <>
                <div className=" flex flex-col justify-center pt-6 gap-4">
                  <div className=" flex justify-start text-2xl mt-7">
                    <h2 className="">Shopping bag</h2>
                  </div>

                  {cart?.length > 0 &&
                    cart.map((dish) => (
                      <CartCard
                        key={dish.id}
                        dish={dish}
                      />
                    ))}
                </div>
                <div className="flex-col  gap-4 pt-6">
                  <div className="flex justify-start text-2xl mt-7 ">
                    <h2 className="">PriceDetails</h2>
                  </div>
                  <PriceDetails />
                </div>
              </>
            ) : (
              <div>
                <h2 className="">Cart is Empty</h2>
                <p
                  onClick={() => navigate("/foods")}
                  className="text-red-600 underline hover:cursor-pointer"
                >
                  Click To Add Items To The Cart
                </p>
              </div>
            )}
          </>
        </div>
      </main>
    </>
  );
};
