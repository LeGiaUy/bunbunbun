// import { Link } from "react-router-dom";

// import Button from "../../components/common/Button";
import GalleryCard from "../../../components/gallery/GalleryCard";
import SectionTitle from "../../../components/common/SectionTitle";

import gallery1 from "../../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../../assets/images/gallery/gallery3.jpg";
import gallery4 from "../../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../../assets/images/gallery/gallery5.jpg";
import gallery6 from "../../../assets/images/gallery/gallery6.jpg";

const galleryImages = [
  {
    id: 1,
    image: gallery1,
    alt: "Restaurant interior",
  },
  {
    id: 2,
    image: gallery2,
    alt: "Vietnamese dishes",
  },
  {
    id: 3,
    image: gallery3,
    alt: "Fresh ingredients",
  },
  {
    id: 4,
    image: gallery4,
    alt: "Dining area",
  },
  {
    id: 5,
    image: gallery5,
    alt: "Chef preparing food",
  },
  {
    id: 6,
    image: gallery6,
    alt: "Customers enjoying meals",
  },
];

function GalleryPreview() {
  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          subtitle="Gallery"
          title="Moments at Bun Bun Bun"
          description="Explore our restaurant, signature dishes and the warm atmosphere that makes every visit memorable."
        />

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <GalleryCard key={item.id} image={item.image} alt={item.alt} />
          ))}
        </div>

        {/* <div className="mt-14 text-center">
          <Link to="/gallery">
            <Button size="lg">View Full Gallery</Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}

export default GalleryPreview;
