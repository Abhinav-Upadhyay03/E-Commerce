import React from "react";

const ProductCart = ({ name, price }) => {
  return (
    <>
      <div className="parent flex content-center items-center m-16 p-2 bg-gray-50 rounded-3xl gap-10 shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
        <div className="left w-1/4">
          <img className="rounded-2xl" src="/images/logo.jpg" alt="" />
        </div>
        <div className="right leading-loose">
          <h1 className="text-3xl">{name}</h1>
          <p className="text-md">Lorem ipsum dolor sit amet.</p>
          <p className="text-xl">{price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
