import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

function NavBar() {
  const listItem = [
    {
      id: 1,
      name: "TRANG CHỦ",
      link: "/home",
    },
    {
      id: 2,
      name: "GIỚI THIỆU ",
      link: "/about",
    },
    {
      id: 3,
      name: "DỊCH VỤ",
      link: "/service",
    },
    {
      id: 4,
      name: "DỰ ÁN",
      link: "/project",
    },
    {
      id: 5,
      name: "SẢN PHẨM",
      link: "/product",
    },
    {
      id: 6,
      name: "TIN TỨC",
      link: "/news",
    },
    {
      id: 7,
      name: "TUYỂN DỤNG",
      link: "/recruit",
    },
    {
      id: 8,
      name: "LIÊN HỆ",
      link: "/contact",
    },
  ];
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 150) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Navbar
      bg={!colorChange ? "myColor-2" : "myColor-1"}
      fixed="top"
      expand="lg"
      collapseOnSelect
      className="border"
      style={{ padding: "0" }}
    >
      <div className="container">
        <Navbar.Brand href="/" style={{ padding: "0" }}>
          <img
            className="img-logo-navbar"
            src={require("../../images/logo/logo-header.png")}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="justify-content-center" style={{ width: "100%" }}>
            {listItem.map((item) => (
              <Nav.Link className="nav-links" href={item.link} key={item.id}>
                <div>
                  <span className="text">{item.name}</span>
                 <div className="line-header"></div>
                </div>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
