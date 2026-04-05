import { useEffect, useState } from "react";
import { Close, DarkMode, LightMode, Menu } from "@mui/icons-material";
import "./Navbar.css";
import useTheme, { themes } from "../../../context/ThemeContext";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const { theme, setTheme, iconColor } = useTheme();

  useEffect(() => {
    if (window.location.pathname === "/") {
      setActiveItem("home");
    }
  }, []);

  // toggle click
  const menuToggleHandler = () => {
    setMenuToggle(!menuToggle);
  };

  // dark/ light mode
  const themeModeHandler = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
    localStorage.setItem(
      "userTheme",
      theme === themes.light ? "dark" : "light",
    );
  };

  const navItemStyles = (isActive) => ({
    color: "white",
    fontWeight: isActive ? "bold" : "normal",
    borderBottom: isActive ? "4px solid #784cfb" : "none",
  });

  // contact
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <>
      <div className="outer">
        <nav className="navbar">
          <div className="navbar-title">
            <button className="navbar-btn" onClick={menuToggleHandler}>
              <Menu fontSize="large" sx={{ color: "white" }} />
            </button>
            <Link className="navbar-brand" to="/" style={{ color: "white" }}>
              adidoshi
            </Link>
          </div>
          <ul className="navbar-list">
            <NavLink to="/" onClick={() => setActiveItem("home")}>
              <li
                className="navbar-list-item"
                style={navItemStyles(activeItem === "home")}
              >
                Home
              </li>
            </NavLink>
            <a href="#skillSection" onClick={() => setActiveItem("skills")}>
              <li
                className="navbar-list-item"
                style={navItemStyles(activeItem === "skills")}
              >
                Skills
              </li>
            </a>
            <a href="#projectSection" onClick={() => setActiveItem("projects")}>
              <li
                className="navbar-list-item"
                style={navItemStyles(activeItem === "projects")}
              >
                Projects
              </li>
            </a>
            <a href="#blogSection" onClick={() => setActiveItem("blogs")}>
              <li
                className="navbar-list-item"
                style={navItemStyles(activeItem === "blogs")}
              >
                Blogs
              </li>
            </a>
            <li
              className="navbar-list-item"
              onClick={() => {
                setActiveItem("contact");
                scrollToBottom();
              }}
              style={navItemStyles(activeItem === "contact")}
            >
              Contact
            </li>

            <li>
              <button className="navbar-btn" onClick={themeModeHandler}>
                {theme === themes.light ? (
                  <DarkMode
                    sx={{
                      fontSize: 25,
                      color: "white",
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
        }}
      >
        <button className="sidebar-btn" onClick={() => setMenuToggle(false)}>
          <Close sx={{ fontSize: 30, color: iconColor }} />
        </button>
        <ul className="sidebar-list">
          <NavLink
            to="/"
            style={{ color: theme.foreground }}
            onClick={() => {
              setActiveItem("home");
              setMenuToggle(false);
            }}
          >
            <li>Home</li>
          </NavLink>
          <a
            href="#skillSection"
            onClick={() => {
              setActiveItem("skills");
              setMenuToggle(false);
            }}
          >
            <li className="sidebar-list" style={{ color: theme.foreground }}>
              Skills
            </li>
          </a>
          <a
            href="#projectSection"
            onClick={() => {
              setActiveItem("projects");
              setMenuToggle(false);
            }}
          >
            <li className="sidebar-list" style={{ color: theme.foreground }}>
              Projects
            </li>
          </a>
          <a
            href="#blogSection"
            onClick={() => {
              setActiveItem("blogs");
              setMenuToggle(false);
            }}
          >
            <li className="sidebar-list" style={{ color: theme.foreground }}>
              Blogs
            </li>
          </a>
          {/* <NavLink to="projects" style={navLinkStyles}>
            <li>Projects</li>
          </NavLink>
          <NavLink to="blogs" style={navLinkStyles}>
            <li>Blogs</li>
          </NavLink> */}
          <li
            style={{ color: theme.foreground }}
            onClick={() => {
              setActiveItem("contact");
              setMenuToggle(false);
              scrollToBottom();
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
