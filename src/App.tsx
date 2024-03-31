import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductInfo from "./pages/ProductInfo";

function App() {
  return (
    <>
     
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />}>
            <Route index element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/productinfo" element={<ProductInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
