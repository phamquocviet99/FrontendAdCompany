import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import LayoutNav from "./components/Slidebar/LayoutNav";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Project from "./Pages/Project";
import Recruit from "./Pages/Recruit";
import DetailsRecruit from "./Pages/DetailsRecruit";
import News from "./Pages/News";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import DetailsProject from "./Pages/DetailsProject";
import DetailsNews from "./Pages/DetailsNews";
import CategoryProject from "./Admin/CategoryProject/CategoryProject";
import Login from "./Admin/Login/Login";

function ClientLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
const userData = JSON.parse(localStorage.getItem("user"));
function AdminLayout() {
  if (userData) {
    return (
      <div>
        <LayoutNav />
        <Outlet />
      </div>
    );
  }
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
          <Route path="/tuyen-dung/chi-tiet" element={<DetailsRecruit />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/san-pham" element={<Product />} />
          <Route path="/san-pham/chi-tiet" element={<ProductDetails />} />
          <Route path="/du-an/chi-tiet" element={<DetailsProject />} />
          <Route path="/tin-tuc/chi-tiet" element={<DetailsNews />} />
        </Route>
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="/admin"
            element={<Navigate replace to="/admin/danh-muc-du-an" />}
          />

          <Route path="/admin/danh-muc-du-an" element={<CategoryProject />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
