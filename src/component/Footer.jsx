import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="mb-4">LA COLLECTION</h5>
            <p className="text-muted">
              Your ultimate destination for fashion and style. Discover the latest trends in clothing, accessories, and more.
            </p>
          </div>
          <div className="col-lg-2">
            <h6 className="mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-muted text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-muted text-decoration-none">Products</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-muted text-decoration-none">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-muted text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6 className="mb-4">Contact Info</h6>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                <i className="fa fa-map-marker me-2"></i>
                123 Fashion Street, Los Angeles
              </li>
              <li className="mb-2">
                <i className="fa fa-phone me-2"></i>
                (555) 123-4567
              </li>
              <li className="mb-2">
                <i className="fa fa-envelope me-2"></i>
                info@lacollection.com
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6 className="mb-4">Newsletter</h6>
            <p className="text-muted mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button className="btn btn-light" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-muted mb-0">
              © 2024 LA COLLECTION. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="social-links">
              <a href="#" className="text-muted me-3">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 