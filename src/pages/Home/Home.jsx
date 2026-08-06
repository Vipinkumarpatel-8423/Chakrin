import BusinessSection from "../../components/home/BusinessSection";
import GalleryShowcase from "../../components/home/GalleryShowcase";
import Hero from "../../components/home/Hero";
import ReviewsSection from "../../components/home/ReviewsSection";
import StatsSection from "../../components/home/StatsSection";
import VideoSection from "../../components/home/VideoSection";
import AboutSection from "../../components/home/AboutSection";


const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <VideoSection />
      <StatsSection />
      <GalleryShowcase />
      <BusinessSection />
      <ReviewsSection />
    </>
  );
};

export default Home;