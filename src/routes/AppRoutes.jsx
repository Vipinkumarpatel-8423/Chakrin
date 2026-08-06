import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/Blog/BlogDetails";
import DigitalPrinting from "../pages/Businesses/DigitalPrnting";
import TextileMachine from "../pages/Businesses/TextileMachine";
import SpareParts from "../pages/Businesses/SpareParts";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";


// import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetails />} />
          <Route
            path="businesses/digital-printing"
            element={<DigitalPrinting />}
          />
          <Route
            path="businesses/textile-machines"
            element={<TextileMachine />}
          />
          <Route
            path="businesses/spare-parts"
            element={<SpareParts />}
          />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />

          {/* <Route path="about-us" element={<About />} />

          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />

          <Route path="*" element={<NotFound />} /> */}

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;