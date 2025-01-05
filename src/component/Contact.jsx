import React, { useState } from 'react';
import { showSuccess } from '../services/toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verilerini backend'e gönderebilirsiniz
    showSuccess('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 className="text-primary fw-bold mb-4">Get in Touch</h2>
          <p className="lead mb-4">
            We'd love to hear from you. Please fill out the form below or use our 
            contact information.
          </p>
          
          <div className="mb-4">
            <h4>Our Location</h4>
            <p>123 Fashion Street, Los Angeles, CA 90012</p>
          </div>
          
          <div className="mb-4">
            <h4>Contact Info</h4>
            <p>Email: info@lacollection.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          
          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="d-flex gap-3">
              <a href="#" className="text-dark"><i className="fa fa-facebook fa-lg"></i></a>
              <a href="#" className="text-dark"><i className="fa fa-instagram fa-lg"></i></a>
              <a href="#" className="text-dark"><i className="fa fa-twitter fa-lg"></i></a>
              <a href="#" className="text-dark"><i className="fa fa-linkedin fa-lg"></i></a>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h3 className="card-title mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 