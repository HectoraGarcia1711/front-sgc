import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

type Props = { children?: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      <div>{children ?? <Outlet />}</div>
    </div>
  );
};

export default Layout;
