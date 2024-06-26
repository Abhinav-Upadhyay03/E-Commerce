import React from "react";
import Cart from "../pages/Cart";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };
  const handleLogoClick = () => {
    navigate("/")
  };
  return (
    <div className="nav flex place-content-between h-28 w-100 ">
      <div className="left flex place-content-evenly items-center sm:w-1/4 w-1/6">
        <img
          src="/images/logoMain.png"
          alt=""
          className="sm:rounded-full sm:w-52 sm:h-52  h-28 cursor-pointer"
          onClick={handleLogoClick}
        />
      </div>
      <div className="middle flex place-content-evenly items-center sm:w-1/2 w-5/12 ">
        <div className="searchBar flex h-10 w-full bg-gray-200 rounded-full place-content-around items-center">
          <input
            className="outline-none bg-gray-200 ms-4 h-full w-4/5 "
            type="text"
            placeholder="Search Items"
          />
          <a href="">
            <i className="ri-search-2-line sm:text-2xl p-2 text-l"></i>
          </a>
        </div>
      </div>
      <div className="right flex  place-content-evenly items-center w-1/6">
        <a href="">
          <i className="ri-heart-line w-1/3 sm:text-3xl text-xl font-thin"></i>
        </a>

        <a href="">
          <i
            className="ri-shopping-cart-line sm:text-3xl text-xl font-thin"
            onClick={handleCartClick}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
