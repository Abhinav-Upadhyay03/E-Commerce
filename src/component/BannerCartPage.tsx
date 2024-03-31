import React from 'react'

const BannerCartPage = () => {
  return (
    <div className="parent flex w-full justify-center  mt-6 mb-10 m-auto">
      <div className="first">
        <div className="circle m-auto rounded-full bg-green-100 w-8 h-8"></div>
        <p className="text-sm m-auto mt-2 font-medium">Browse Products</p>
      </div>
      <div className="line mt-4 border-t w-24 border-gray-400"></div>
      <div className="second">
        <div className="circle m-auto rounded-full bg-red-300 w-8 h-8"></div>
        <p className="text-sm m-auto mt-2 font-medium">Add to Cart</p>
      </div>
      <div className="line mt-4 border-t w-24 border-gray-400"></div>
      <div className="third">
        <div className="circle m-auto rounded-full bg-green-100 w-8 h-8"></div>
        <p className="text-sm m-auto mt-2 font-medium">Check Out</p>
      </div>
    </div>
  );
}

export default BannerCartPage