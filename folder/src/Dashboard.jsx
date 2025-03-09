import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-text">Welcome to your dashboard!</p>

        <div>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="dashboard-link">
              Register
            </Link>
          </p>

          <p>
            Already have an account?{" "}
            <Link to="/login" className="dashboard-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
