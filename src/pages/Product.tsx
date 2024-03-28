import React from 'react'
import ProductCard from '../component/ProductCard';

const Product = () => {
    const products = [
      { id: 1, name: "Product1", price: "1299" },
      { id: 2, name: "Product2", price: "199" },
      { id: 3, name: "Product3", price: "299" },
      { id: 4, name: "Product4", price: "99" },
      { id: 5, name: "Product5", price: "699" },
      { id: 6, name: "Product6", price: "499" },
      { id: 7, name: "Product7", price: "1599" },
      { id: 8, name: "Product8", price: "399" },
      { id: 9, name: "Product9", price: "299" },
    ];
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-2">
        {products.map((product, index) => (
            <ProductCard key={index} name = {product.name} price = {product.price}/>
        ))}
      </div>
    </div>
  );
}

export default Product
