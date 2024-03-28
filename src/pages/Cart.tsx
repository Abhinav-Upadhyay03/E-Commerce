import React, { useEffect, useState } from "react";
import ProductCart from "../component/ProductCart";

const Cart = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || [];

    setdata(products);
  }, []);
  console.log(data);
  {
    data.map((value, index) => console.log(value.name));
  }

  return (
    <>
      <h1 className="text-4xl mt-12 ms-16">MY CART</h1>
      <div className="parent flex">
        <div className="left">
          {data.map((value, index) => (
            <ProductCart name={value.name} price={value.price} />
          ))}
        </div>
        <div className="right h-1/2 w-1/3 m-auto me-16 p-8  bg-red-50 rounded-3xl">
          <div className="first mb-8">
            <h1 className="text-3xl">Order Summary</h1>
          </div>
          <div className="second flex justify-between mb-4">
            <p className="text-2xl font-light">Sub Total</p>
            <p className="text-2xl font-normal">1299.00</p>
          </div>
          <div className="third flex justify-between mb-4">
            <p className="text-2xl font-light">Discount</p>
            <p className="text-2xl font-normal">12.59</p>
          </div>
          <div className="fourth flex justify-between mb-4">
            <p className="text-2xl font-light">Tax</p>
            <p className="text-2xl font-normal">11.11</p>
          </div>
          <div className="fifth flex justify-between mb-6">
            <p className="text-2xl font-light">Shipping</p>
            <p className="text-2xl font-normal text-red-600">FREE</p>
          </div>
          <div className="sixth flex justify-between mb-4">
            <p className="text-2xl font-medium">Total</p>
            <p className="text-2xl font-normal">1500.00</p>
          </div>
          <div className="proceed flex w-3/4 mt-10 rounded-3xl bg-blue-600 justify-center items-center text-white p-3 m-auto">
            <p className="text-xl font-normal">Proceed to Checkout</p>
            <i className="ri-arrow-right-double-fill text-xl font-normal"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
