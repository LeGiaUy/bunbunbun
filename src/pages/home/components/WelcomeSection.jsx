import Button from "../../../components/common/Button.jsx";
import welcomeImage from "../../../assets/images/welcome/welcome1.jpg";
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
        <p className="mb-2 text-amber-600 font-semibold">Welcome</p>

        <h2 className="mb-6 text-4xl font-bold">
          Authentic Vietnamese Cuisine
        </h2>

        <p className="mb-8 leading-8 text-gray-600">
          Bringing the vibrant flavours of Vietnam to London with fresh
          ingredients, traditional recipes, and warm hospitality.
        </p>
        <div>
          <Link to="/about">
            <Button>About Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
