import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./src/components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
