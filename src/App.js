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
import CategoryProductPageAdmin from "./Admin/CategoryProduct/CategoryProduct";
import InformationPage from "./Admin/Information/InformationPage";
import NewsPage from "./Admin/News/News";
import ProductPageAdmin from "./Admin/Product/Product";

import ProjectCreatePageAdmin from "./Admin/Project/ProjectCreate";
import ProjectDetailsPageAdmin from "./Admin/Project/ProjectDetails";
import ProjectPageAdmin from "./Admin/Project/Project";
import ProjectUpdatePageAdmin from "./Admin/Project/ProjectUpdate";
import RecruitPageAdmin from "./Admin/Recruit/Recruit";
import RecruitCreate from "./Admin/Recruit/RecruitCreate";
import RecruitUpdate from "./Admin/Recruit/RecruitUpdate";
import ChangePassword from "./Admin/Login/ChangePassword";
import UserAdmin from "./Admin/User/UserAdmin";
import SignIn from "./Admin/Login/SignIn";
import UpdateInfor from "./Admin/Login/UpdateInformation";
import NotRegister from "./Admin/NotRegister";
import NewsPageAdmin from "./Admin/News/News";
import NewsCreatePage from "./Admin/News/NewsCreate";
import NewsUpdatePage from "./Admin/News/NewsUpdate";
import ProductCreate from "./Admin/Product/ProductCreate";
import ProductDetailAdmin from "./Admin/Product/ProductDetail";
import ProductUpdate from "./Admin/Product/ProductUpdate";
import Partner from "./Admin/Partner/Partner";

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
  } else {
    return <NotRegister />;
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
          <Route path="/du-an/:id" element={<Project />} />{" "}
          <Route path="/du-an" element={<Project />} />
          <Route path="/tuyen-dung" element={<Recruit />} />
          <Route path="/tuyen-dung/chi-tiet/:id" element={<DetailsRecruit />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/san-pham" element={<Product />} />
          <Route path="/san-pham/:id" element={<Product />} />
          <Route path="/san-pham/chi-tiet/:id" element={<ProductDetails />} />
          <Route path="/du-an/chi-tiet/:id" element={<DetailsProject />} />
          <Route path="/tin-tuc/chi-tiet/:id" element={<DetailsNews />} />
        </Route>
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="/admin"
            element={<Navigate replace to="/admin/danh-muc-du-an" />}
          />{" "}
          <Route
            path="/admin/danh-muc-san-pham"
            element={<CategoryProductPageAdmin />}
          />
          <Route path="/admin/thong-tin" element={<InformationPage />} />
          <Route path="/admin/danh-muc-du-an" element={<CategoryProject />} />
          <Route path="/admin/du-an" element={<ProjectPageAdmin />} />
          <Route path="/admin/du-an/tao" element={<ProjectCreatePageAdmin />} />
          <Route
            path="/admin/du-an/:id"
            element={<ProjectDetailsPageAdmin />}
          />
          <Route
            path="/admin/du-an/chinh-sua/:id"
            element={<ProjectUpdatePageAdmin />}
          />
          <Route path="/admin/tuyen-dung" element={<RecruitPageAdmin />} />
          <Route path="/admin/tuyen-dung/tao" element={<RecruitCreate />} />
          <Route
            path="/admin/tuyen-dung/cap-nhat/:id"
            element={<RecruitUpdate />}
          />
          <Route path="/admin/doi-mat-khau" element={<ChangePassword />} />
          <Route path="/admin/nguoi-dung" element={<UserAdmin />} />
          <Route path="/admin/nguoi-dung/tao" element={<SignIn />} />
          <Route path="/admin/cap-nhap-thong-tin" element={<UpdateInfor />} />
          <Route path="/admin/tin-tuc" element={<NewsPageAdmin />} />
          <Route path="/admin/tin-tuc/tao" element={<NewsCreatePage />} />
          <Route
            path="/admin/tin-tuc/cap-nhat/:id"
            element={<NewsUpdatePage />}
          />
          <Route
            path="/admin/danh-muc-san-pham"
            element={<CategoryProductPageAdmin />}
          />
          <Route path="/admin/san-pham" element={<ProductPageAdmin />} />
          <Route path="/admin/san-pham/tao" element={<ProductCreate />} />
          <Route path="/admin/san-pham/:id" element={<ProductDetailAdmin />} />
          <Route
            path="/admin/san-pham/cap-nhat/:id"
            element={<ProductUpdate />}
          />
          <Route path="/admin/doi-tac" element={<Partner />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
