import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
              className="product-card-link"
            >
              <div className="product-card">
                <img
                  src={
                    product.image.startsWith("http")
                      ? product.image
                      : `${process.env.PUBLIC_URL}${product.image}`
                  }
                  alt={product.name}
                  className="product-img"
                />
                <h2>{product.name}</h2>
                <p>Brand: {product.brand}</p>
                <p>Gender: {product.gender}</p>
                <p>₹{product.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
