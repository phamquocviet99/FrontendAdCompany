import { React, useState } from "react";
import Backdrop from "./Backdrop";
import Header from "./Header";
import SideBar from "./SideBar";

const LayoutNav = () => {
  const [sidebar, setSideBar] = useState(false);
  const toggleSidebar = () => {
    setSideBar((prevState) => !prevState);
  };
  return (
    <div>
      <Header openSidebar={toggleSidebar} />

      <SideBar sidebar={sidebar} />
      <Backdrop sidebar={sidebar} closeBar={toggleSidebar} />
    </div>
  );
};

export default LayoutNav;
