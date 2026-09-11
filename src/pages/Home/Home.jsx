import BusinessSection from "../../components/home/BusinessSection";
import GalleryShowcase from "../../components/home/GalleryShowcase";
import Hero from "../../components/home/Hero";
import ReviewsSection from "../../components/home/ReviewsSection";
import StatsSection from "../../components/home/StatsSection";
import VideoSection from "../../components/home/VideoSection";
import AboutSection from "../../components/home/AboutSection";
import ServicesSection from "../../components/home/ServicesSection";
import WhyChooseUs from "../../components/home/WhyChooseUs";


const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection/>
      <VideoSection />
      <WhyChooseUs/>
      <StatsSection />
      <BusinessSection />
      <GalleryShowcase />
      <ReviewsSection />
    </>
  );
};

export default Home;