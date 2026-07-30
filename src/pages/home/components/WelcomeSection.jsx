import Button from "../../../components/common/Button.jsx";
import welcomeImage from "../../../assets/images/welcome/welcome1.jpg";
import SectionTitle from "../../../components/common/SectionTitle.jsx";
import { Link } from "react-router-dom";

function WelcomeSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <img
        src={welcomeImage}
        alt="Restaurant"
        className="rounded-lg object-cover"
      />

      <div>
        <SectionTitle
          align="left"
          subtitle="Welcome"
          title="Authentic Vietnamese Cuisine"
          description="Bringing the vibrant flavours of Vietnam to London with fresh ingredients, traditional recipes and warm hospitality."
        />
        <div className="mt-6">
          <Link to="/about">
            <Button>About Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
