import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css"
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About"
import Service from "./Pages/Service"
import Project from "./Pages/Project"
import Recruit from "./Pages/Recruit"
import DetailsRecruit from "./Pages/DetailsRecruit";
import News from "./Pages/News"
import Product from "./Pages/Product"
import ProductDetails from "./Pages/ProductDetails";
import DetailsProject from "./Pages/DetailsProject";

function ClientLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
function AdminLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route path="/" element={<Navigate replace to="/trang-chu" />} />
          <Route path="/trang-chu" element={<HomePage />} />
          <Route path="/trang-chu/:params" element={<HomePage />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/dich-vu" element={<Service />} />
          <Route path="/du-an" element={<Project />} />
          <Route path="/tuyen-dung" element={<Recruit />} />
          <Route path="/detail-recruit" element={<DetailsRecruit />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/san-pham" element={<Product />} />
          <Route path="/san-pham/chi-tiet" element={<ProductDetails />} />
          <Route path="/du-an/chi-tiet" element={<DetailsProject />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
