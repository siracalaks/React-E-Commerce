import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../redux/action";
import { NavLink } from 'react-router-dom';
import { showSuccess } from '../services/toast';

function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  }

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price * cartItem.qty}</p>
              <button className="btn btn-outline-dark me-4" 
                      onClick={()=>handleClose(cartItem)}>
                <i className="fa fa-minus"></i>
              </button>
              <span className="fw-bold">{cartItem.qty}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  }

  const calculateTotal = () => {
    return state.reduce((total, item) => total + (item.price * item.qty), 0).toFixed(2);
  };

  const checkout = () => {
    showSuccess('Order placed successfully!');
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && (
        <>
          {state.map(cartItems)}
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Order Summary</h5>
                    <p className="card-text">Total Items: {state.length}</p>
                    <p className="card-text">Total Amount: ${calculateTotal()}</p>
                    <button 
                      className="btn btn-success w-100"
                      onClick={checkout}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;