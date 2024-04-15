import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./styles/main.css";
import Signup from "./components/Signup";
import AboutUs from "./components/AboutUs";

function App() {
  const token = localStorage.getItem("authTokens")
    ? JSON.parse(localStorage.getItem("authTokens"))
    : null;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
