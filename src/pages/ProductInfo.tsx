import React from "react";
import { useNavigate } from "react-router-dom";
const ProductInfo = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className="productpage flex p-8 h-scren">
        <div className="left w-6/12">
          <div className="img w-full flex justify-center items-center">
            <img className="h-96" src="/images/fruits.jpg" alt="" />
          </div>
        </div>
        <div className="right w-6/12 p-8">
          <div className="title text-4xl mt-8">Lorem, ipsum.</div>
          <div className="price mt-4 text-2xl">$401</div>
          <div className="desc mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              non? Molestiae optio eius voluptas architecto repudiandae sed
              iusto deserunt! Doloribus mollitia praesentium vero sunt?
            </p>
            <button
              className="bg-green-100 p-3 w-6/12 mt-4 text-sm rounded-3xl"
              onClick={handleCartClick}
            >
              Add to cart(NOT FUNCTIONAL FOR NOW)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
