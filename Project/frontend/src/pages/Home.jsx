import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to the Student-Teacher Appointment System</h1>
          <p>Book appointments with your teachers easily.</p>
          <div className="button-group">
            <Link to="/login" className="btn btn-primary px-4 py-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-success px-4 py-2">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
