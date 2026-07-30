import HeroSlider from "./components/HeroSlider.jsx";
import WelcomeSection from "./components/WelcomeSection.jsx";
import FeaturedMenu from "./components/FeaturedMenu.jsx";
import GalleryPreview from "./components/GalleryPreview.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import BookTableCTA from "./components/BookTableCTA.jsx";

function Home() {
  return (
    <>
      <HeroSlider />
      <WelcomeSection />
      <FeaturedMenu />
      <GalleryPreview />
      <WhyChooseUs />
      <BookTableCTA />
    </>
  );
}

export default Home;
