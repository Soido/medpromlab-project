import { Outlet } from "react-router-dom";
import { useRef } from "react";
import { useScroll } from "react-use";
import Menu from "../components/Menu";

function MainLayout() {
  return (
    <>
      <div>
        <Menu />
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
