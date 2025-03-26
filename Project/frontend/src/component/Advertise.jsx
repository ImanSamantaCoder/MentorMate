import React from "react";

const Advertise = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{height:"600px"}} className="d-block w-100 custom-img"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First Slide</h5>
            <p>Beautiful nature scenery.</p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://plus.unsplash.com/premium_photo-1664104459156-21e2a06e7173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{height:"600px"}} className="d-block w-100 custom-img"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second Slide</h5>
            <p>Peaceful beach with sunset.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{height:"600px"}} className="d-block w-100 custom-img"
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Slide</h5>
            <p>Modern workspace for creativity.</p>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Advertise;
