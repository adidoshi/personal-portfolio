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
      <div className='outer'>
        <nav className="navbar">
          <div className="navbar-title">
            <button className="navbar-btn" onClick={menuToggleHandler}>
              <Menu fontSize="large" sx={{ color: 'white' }} />
            </button>
            <Link className="navbar-brand" to="/" style={{color: 'white'}}>
              adidoshi
            </Link>
          </div>
          <ul className="navbar-list">
            <NavLink to="/" style={navLinkStyles}>
              <li
                className="navbar-list-item"
                style={{color: 'white'}}
                >
                Home
              </li>
            </NavLink>
            <a href="#skillSection">
              <li
                className="navbar-list-item"
                style={{color: 'white'}}
               >
                Skills
              </li>
            </a>
            <a href="#projectSection">
              <li
                className="navbar-list-item"
                style={{color: 'white'}}
               >
                Projects
              </li>
            </a>
            <a href="#blogSection">
              <li
                className="navbar-list-item"
                style={{color: 'white'}}
               >
                Blogs
              </li>
            </a>
            <li className="navbar-list-item" onClick={scrollToBottom} style={{color: 'white'}}>
              Contact
            </li>

            <li>
              <button className="navbar-btn" onClick={themeModeHandler} >
                {theme === themes.light ? (
                  <DarkMode
                    sx={{
                      fontSize: 25,
                      color: 'white',
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
          <NavLink to="/"  style={{ color: theme.foreground}}>
            <li>Home</li>
          </NavLink>
          <a href="#skillSection">
              <li
                className="sidebar-list"
                style={{ color: theme.foreground}}
                onClick={() => setMenuToggle(false)}
               >
                Skills
              </li>
            </a>
            <a href="#projectSection">
              <li
                className="sidebar-list"
                style={{ color: theme.foreground}}
                onClick={() => setMenuToggle(false)}
               >
                Projects
              </li>
            </a>
            <a href="#blogSection">
              <li
                className="sidebar-list"
                style={{ color: theme.foreground}}
                onClick={() => setMenuToggle(false)}
               >
                Blogs
              </li>
            </a>
          {/* <NavLink to="projects" style={navLinkStyles}>
            <li>Projects</li>
          </NavLink>
          <NavLink to="blogs" style={navLinkStyles}>
            <li>Blogs</li>
          </NavLink> */}
          <li  style={{ color: theme.foreground}} onClick={scrollToBottom}>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
