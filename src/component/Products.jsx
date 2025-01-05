import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setAllProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getFilteredProducts = () => {
    let filtered = [...allProducts];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  if (loading) {
    return (
      <div className="container py-5">
        <div className="row">
          {[...Array(8)].map((_, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <Skeleton height={350} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const filteredProducts = getFilteredProducts();

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="col-md-6 d-flex justify-content-end gap-2">
          <button
            className={`btn ${selectedCategory === "all" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => handleCategoryClick("all")}
          >
            All
          </button>
          <button
            className={`btn ${selectedCategory === "men's clothing" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => handleCategoryClick("men's clothing")}
          >
            Men's
          </button>
          <button
            className={`btn ${selectedCategory === "women's clothing" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => handleCategoryClick("women's clothing")}
          >
            Women's
          </button>
          <button
            className={`btn ${selectedCategory === "jewelery" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => handleCategoryClick("jewelery")}
          >
            Jewelery
          </button>
          <button
            className={`btn ${selectedCategory === "electronics" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => handleCategoryClick("electronics")}
          >
            Electronics
          </button>
        </div>
      </div>

      <div className="row">
        {filteredProducts.length === 0 ? (
          <div className="col-12 text-center">
            <h3>No Products Found</h3>
            <p>Try different search terms or categories</p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-0" style={{ fontSize: "1rem" }}>
                    {product.title.substring(0, 50)}...
                  </h5>
                  <p className="card-text mt-2">
                    <small className="text-muted">{product.category}</small>
                  </p>
                  <p className="card-text fw-bold">${product.price}</p>
                  <NavLink to={`/products/${product.id}`} className="btn btn-dark">
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
