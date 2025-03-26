import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Account from "./pages/Account.jsx";
import Cart from "./pages/Cart.jsx";
import Footer from "./components/Footer.jsx";

import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "./store/slices/auth";

import "./App.css";

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Router>
      {isAuthenticated && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      {isAuthenticated && <Footer />}
    </Router>
  );
}

export default App;
