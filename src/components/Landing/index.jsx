import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import bgNow from "../../images/bg-now.jpg";
import bg8 from "../../../public/bg-7.jpg";

function Landing() {
  return (
    <div className="container-landing shadow-2xl  bg-custom-bg font-serif ">
      <div className="img-container  text-stone-500 content-center text-center justify-center items-center overflow-hidden">
        <div className=" flex-col text-xs md:text-2xl lg:text-3xl text-stone-500 font-bold ">
          <span>Best Food Delivery In Town</span>
          <span>At Your Door</span>
        </div>
        <div>
          <span className="text-xs md:text-2xl font-light">
            Eat the food you dream about at affordable prices. No need to come
            to us. We deliver you yummy foods.
          </span>
        </div>
        <div className="text-container">
          <Link to="/foods">
            <button className="btn ">See Menu </button>
          </Link>
        </div>
      </div>
      <div className="image">
        <img
          src={bgNow}
          alt=""
        />
      </div>
    </div>
  );
}

export default Landing;
