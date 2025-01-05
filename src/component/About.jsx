import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-primary fw-bold mb-4">About LA COLLECTION</h1>
          <p className="lead mb-4">
            Founded in 2023, LA COLLECTION has become a leading destination for fashion-forward individuals 
            seeking quality clothing and accessories. Our mission is to provide exceptional products that 
            combine style, comfort, and affordability.
          </p>
          <p className="mb-4">
            We carefully curate our collections to ensure that every piece meets our high standards of 
            quality and style. Our team works directly with manufacturers to bring you the latest trends 
            at competitive prices.
          </p>
          <div className="row mb-4">
            <div className="col-md-6">
              <h4 className="fw-bold">Our Vision</h4>
              <p>To become the most trusted fashion destination worldwide.</p>
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">Our Values</h4>
              <ul>
                <li>Quality</li>
                <li>Sustainability</li>
                <li>Customer First</li>
                <li>Innovation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img 
            src="/assets/about-image.jpg" 
            alt="About Us" 
            className="img-fluid rounded shadow"
            style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default About; 