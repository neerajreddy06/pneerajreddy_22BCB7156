import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Failed to load product.");
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img
        src={product.image}
        alt={product.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/default.jpg"; // fallback image
        }}
        className="product-image"
      />
      <div className="details">
        <h2>{product.name}</h2>
        <p>
          <strong>₹{product.price}</strong>
        </p>
        <p>{product.description || "No description provided."}</p>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Gender:</strong> {product.gender}
        </p>
        <p>
          <strong>Sizes:</strong> {product.sizes?.join(", ") || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
