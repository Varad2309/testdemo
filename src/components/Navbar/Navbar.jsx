import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import "./Navbar.css";
import { FaSignOutAlt } from "react-icons/fa"; // Importing logout icon from react-icons

const Navbar = () => {
  const { isLoggedIn, logoutUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logoutUser();
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img className="navbar-logo-img" src="logo.jpg" alt="web-logo" />
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/" className="navbar-link">Home</NavLink>
        <NavLink to="#about" className="navbar-link">About</NavLink>
        <NavLink to="#clients" className="navbar-link" onClick={() => scrollToSection('clients')}>Clients</NavLink>
        <NavLink to="#services" className="navbar-link" onClick={() => scrollToSection('services')}>Services</NavLink>
        <NavLink to="#faq" className="navbar-link" onClick={() => scrollToSection('faq')}>FAQ</NavLink>

        {isLoggedIn ? (
          <>
            <div
              className={`navbar-dropdown ${dropdownOpen ? "open" : ""}`}
              onClick={toggleDropdown}
            >
              More Options
              <span className="navbar-dropdown-arrow"></span>
              <div className="navbar-dropdown-menu">
                <NavLink to="/add-employee" className="navbar-dropdown-item">Add Employee</NavLink>
                <NavLink to="/training-calender" className="navbar-dropdown-item">Training Calendar</NavLink>
                <NavLink to="/training-attendance" className="navbar-dropdown-item">Training Attendance</NavLink>
                <NavLink to="*" className="navbar-dropdown-item">Training Need-History and Evaluaiton</NavLink>
                <div 
                  className="navbar-dropdown-item logout-icon"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt /> Logout
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/register" className="navbar-link">Register</NavLink>
            <NavLink to="/login" className="navbar-link">Login</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
