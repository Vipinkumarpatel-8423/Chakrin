import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/Common/WhatsAppButton";
import WebsiteLoader from "../components/Common/WebsiteLoader";

const MainLayout = () => {
  return (
    <>

    <WebsiteLoader />
      <Header />
      <Outlet />

      <Footer />

      <WhatsAppButton />

    </>
  );
};

export default MainLayout;