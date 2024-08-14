import React, { useEffect, useState } from "react";
import logoSearchGridRed from "/Users/dpthynair/Downloads/GeeksCourse/Projects/ECommerce/src/images/logo-search-grid-red.png";
import { Link } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/login-context";
import { useCart } from "../../context/cart-context";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useLogin();
  const { cart } = useCart();
  console.log("state", state);
  const { token } = state;
  console.log("token", token);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onLoginClick = () => {
    console.log("onloginClick", isLogin);
    navigate("/auth/login");
    setIsLogin(isLogin);
  };
  const onLogoutClick = () => {
    // setIsLogin(false);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/auth/login");
  };

  useEffect(() => {
    setIsLogin(!!token?.access_token);
    console.log("useeffect1", token?.access_token);
    console.log("useeffect2", isLogin);
  }, [token]);

  return (
    <header className="py-4 px-8 text-stone-500 shadow-xl">
      <div className="flex flex-col sm-flex-row md:flex-row items-center justify-between hover:cursor-pointer">
        <div
          onClick={() => navigate("/")}
          className="logo flex flex-col md:flex-col items-center justify-center text-center mb-4 md:mb-0"
        >
          <img
            src={logoSearchGridRed}
            alt="logo"
            className="w-[80px] md:w-[100px] object-center justify-center items-center"
          />
          <h1 className="text-xl md:text-3xl text-btn pl-0 md:pl-[10px] sevillana-regular">
            Food For Soul
          </h1>
        </div>

        <div className="flex gap-4 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl"
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>

        <div
          className={`flex-col md:flex-row gap-4 md:gap-8 justify-items-center items-center text-xl md:text-3xl 
            ${isOpen ? "flex" : "hidden"} md:flex`}
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/foods"
            onClick={() => setIsOpen(false)}
          >
            Foods
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
          >
            Cart
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="icons flex gap-4 md:gap-8 items-center">
          <div
            onClick={() => navigate("/cart")}
            className="material-symbols-outlined text-3xl md:text-4xl hover:cursor-pointer relative"
          >
            shopping_cart
            <span className=" badge absolute right-[0] bottom-4 translate-x-5  text-btn">
              {cart.length}
            </span>
          </div>

          {isLogin ? (
            <div className="material-symbols-outlined text-3xl md:text-4xl hover:cursor-pointer">
              <button onClick={onLogoutClick}>logout</button>
            </div>
          ) : (
            <div className="material-symbols-outlined text-3xl md:text-4xl hover:cursor-pointer flex-col">
              <button onClick={onLoginClick}> account_circle</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
