import React, { useState } from "react";
import { Close, DarkMode, LightMode, Menu } from "@mui/icons-material";
import "./Navbar.css";
import useTheme, { themes } from "../../../context/ThemeContext";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { theme, setTheme, iconColor } = useTheme();

  // toggle click
  const menuToggleHandler = () => {
    setMenuToggle(!menuToggle);
  };

  // dark/ light mode
  const themeModeHandler = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
    localStorage.setItem(
      "userTheme",
      theme === themes.light ? "dark" : "light"
    );
  };

  // active links
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      borderBottom: isActive ? "4px solid #784cfb" : "none",
    };
  };

  // contact
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar-title">
            <button className="navbar-btn" onClick={menuToggleHandler}>
              <Menu fontSize="large" sx={{ color: iconColor }} />
            </button>
            <Link className="navbar-brand" to="/">
              adidoshi
            </Link>
          </div>
          <ul className="navbar-list">
            <NavLink to="/" style={navLinkStyles}>
              <li className="navbar-list-item">Home</li>
            </NavLink>
            <NavLink to="projects" style={navLinkStyles}>
              <li className="navbar-list-item">Projects</li>
            </NavLink>
            <NavLink to="blogs" style={navLinkStyles}>
              <li className="navbar-list-item">Blogs</li>
            </NavLink>
            <li className="navbar-list-item" onClick={scrollToBottom}>
              Contact
            </li>

            <li>
              <button className="navbar-btn" onClick={themeModeHandler}>
                {theme === themes.light ? (
                  <DarkMode
                    sx={{
                      fontSize: 25,
                      color: iconColor,
                    }}
                  />
                ) : (
                  <LightMode
                    sx={{
                      fontSize: 25,
                      color: iconColor,
                    }}
                  />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="sidebar"
        style={{
          left: menuToggle ? "0" : "-100rem",
          color: theme.foreground,
          backgroundColor: theme.sidebarBg,
        }}>
        <button className="sidebar-btn" onClick={() => setMenuToggle(false)}>
          <Close sx={{ fontSize: 30, color: iconColor }} />
        </button>
        <ul className="sidebar-list">
          <NavLink to="/" style={navLinkStyles}>
            <li>Home</li>
          </NavLink>
          <NavLink to="projects" style={navLinkStyles}>
            <li>Projects</li>
          </NavLink>
          <NavLink to="blogs" style={navLinkStyles}>
            <li>Blogs</li>
          </NavLink>
          <li onClick={scrollToBottom}>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
