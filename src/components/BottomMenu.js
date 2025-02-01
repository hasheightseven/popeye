import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaPlusCircle, FaBell, FaUser } from "react-icons/fa";
import "./BottomMenu.css"; // Import CSS for styling

const BottomMenu = () => {
  return (
    <nav className="bottom-menu">
      <NavLink to="/" className="menu-item">
        <FaHome />
        <span>Home</span>
      </NavLink>
      <NavLink to="/search" className="menu-item">
        <FaSearch />
        <span>Search</span>
      </NavLink>
      <NavLink to="/add" className="menu-item">
        <FaPlusCircle />
        <span>Add</span>
      </NavLink>
      <NavLink to="/notifications" className="menu-item">
        <FaBell />
        <span>Alerts</span>
      </NavLink>
      <NavLink to="/profile" className="menu-item">
        <FaUser />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomMenu;