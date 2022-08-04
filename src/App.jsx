import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About.jsx/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PrivateRoute Component={Home} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<PrivateRoute Component={About} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
