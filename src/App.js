import { Route, Routes } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Social from "./components/Social";
import CustomCursor from "./components/CustomCursor";
import { useRef } from "react";
import { useCustomCursor } from "./hooks/useCustomCursor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);
  useSmoothScroll();
  useCustomCursor(innerCursorRef, outerCursorRef);
  return (
    <div className="app">
      <div className="noise"></div>
      <CustomCursor
        innerCursorRef={innerCursorRef}
        outerCursorRef={outerCursorRef}
      />
      <Navbar />
      <ToastContainer />
      <Social />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navbar footerNav />
      <Footer />
    </div>
  );
};

export default App;
