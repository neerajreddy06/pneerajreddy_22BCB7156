// client/src/pages/Home.js
import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to</h1>
        <h2>
          <strong>E-Commerce Store</strong>
        </h2>
        <p>Explore the top collections with exclusive offers & discounts.</p>
        <button onClick={handleShopNow}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Home;
