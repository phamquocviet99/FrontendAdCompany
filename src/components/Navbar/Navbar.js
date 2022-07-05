import React, { useEffect, useState } from "react";

import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";

function NavBar(props) {
  const { location } = props;

  const listItem = [
    {
      id: 1,
      name: "TRANG CHỦ",
      link: "/trang-chu",
    },
    {
      id: 2,
      name: "GIỚI THIỆU ",
      link: "/gioi-thieu",
    },
    {
      id: 3,
      name: "DỊCH VỤ",
      link: "/dich-vu",
    },
    {
      id: 4,
      name: "DỰ ÁN",
      link: "/du-an",
    },
    {
      id: 5,
      name: "SẢN PHẨM",
      link: "/san-pham",
    },
    {
      id: 6,
      name: "TIN TỨC",
      link: "/tin-tuc",
    },
    {
      id: 7,
      name: "TUYỂN DỤNG",
      link: "/tuyen-dung",
    },
    {
      id: 8,
      name: "LIÊN HỆ",
      link: "/trang-chu/lien-he",
    },
  ];
  // function SaveCurrentNav(id) {}
  const [show, setShow] = useState(false);
  const changeNavbarColor = () => {};

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Navbar
      bg={!show ? "myColor-2" : "myColor-1"}
      fixed="top"
      expand="lg"
      collapseOnSelect
      style={{ padding: "0" }}
    >
      <div className=" container  ">
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
                <span
                  className={
                    "/" + window.location.pathname.split("/").slice(1)[0] ===
                    item.link
                      ? "text-active"
                      : "text"
                  }
                >
                  {item.name}
                </span>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
