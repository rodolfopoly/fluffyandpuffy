import React from "react";
import ProductList from "../components/ProductList";
//import CategoryMenu from "../components/CategoryMenu";
import Showcase from "../components/Showcase"
//import Cart from "../components/Cart";

const Home = () => {
  return (
    <div >
      <Showcase/>
      <ProductList />
    </div>
  );
};

export default Home;
