import HeroSlider from "./components/HeroSlider.jsx";
import WelcomeSection from "./components/WelcomeSection.jsx";
import FeaturedMenu from "./components/FeaturedMenu.jsx";
import GalleryPreview from "./components/GalleryPreview.jsx";

function Home() {
  return (
    <>
      <HeroSlider />
      <WelcomeSection />
      <FeaturedMenu />
      <GalleryPreview />
    </>
  );
}

export default Home;
