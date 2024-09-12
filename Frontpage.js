// src/components/HomePage.js
import React from 'react';


const Frontpage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Our E-Commerce Store</h1>
      <div className="categories">
        <div className="category">
          <h2>Laptops</h2>
          <p>Explore our range of high-performance laptops.</p>
        </div>
        <div className="category">
          <h2>Tablets</h2>
          <p>Discover the best tablets for your daily needs.</p>
        </div>
        <div className="category">
          <h2>Phones</h2>
          <p>Find the latest and greatest smartphones here.</p>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
