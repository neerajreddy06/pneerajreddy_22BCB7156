// client/src/components/FilterSidebar.js
import React from "react";
import "./FilterSidebar.css";

const FilterSidebar = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-sidebar">
      <h3>Filter Options</h3>

      <div className="filter-group">
        <label>Gender</label>
        <select onChange={(e) => onFilterChange("gender", e.target.value)}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Brand</label>
        <select onChange={(e) => onFilterChange("brand", e.target.value)}>
          <option value="">All</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Puma">Puma</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Size</label>
        <select onChange={(e) => onFilterChange("size", e.target.value)}>
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
