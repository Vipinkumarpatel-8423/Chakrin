import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/Common/WhatsAppButton";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />

      <WhatsAppButton />

    </>
  );
};

export default MainLayout;