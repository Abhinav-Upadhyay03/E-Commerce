import Navbar from "../component/Navbar";
import ProductCard from "../component/ProductCard";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid sm:grid-cols-3 grid-cols-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
