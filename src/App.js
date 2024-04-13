import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./styles/main.css";
function App() {
  const token = localStorage.getItem("authTokens")
    ? JSON.parse(localStorage.getItem("authTokens"))
    : null;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
