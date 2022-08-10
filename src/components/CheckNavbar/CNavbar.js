import { React, useRef } from "react";
import "./CNavbar.css";
import { FaBars,FaArrowAltCircleLeft } from "react-icons/fa";
function CNavbar() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
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
  return (
    <header>
      <a href="/"> <img
        className="img-logo-navbar"
        src={require("../../images/logo/logo-header.png")}
        alt="logo"
      /></a>
     
      <nav ref={navRef}>
        {listItem.map((item, index) => (
       
            <a
              href={item.link}
              key={item.id}
              className={
                "/" + window.location.pathname.split("/").slice(1)[0] ===
                item.link
                  ? "text-active "
                  : "text  "
              }
            >
              {item.name}
            </a>
          
        ))}

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        <FaArrowAltCircleLeft />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default CNavbar;
