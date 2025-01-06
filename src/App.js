import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './component/ErrorBoundary';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Routes } from "react-router-dom";
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Register from './component/Register';
import { Suspense } from 'react';
import LoadingSpinner from './component/LoadingSpinner';
import NotFound from './component/NotFound';
import Footer from './component/Footer';

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
