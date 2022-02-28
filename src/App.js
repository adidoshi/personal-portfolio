import "./App.css";
import Home from "./screens/Home";
import Navbar from "./components/home/navbar/Navbar";
import Projects from "./screens/Projects";
import Blogs from "./screens/Blogs";
import { Route, Routes } from "react-router-dom";
import useTheme from "./context/ThemeContext";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        color: theme.foreground,
        backgroundColor: theme.sidebarBg,
      }}>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
