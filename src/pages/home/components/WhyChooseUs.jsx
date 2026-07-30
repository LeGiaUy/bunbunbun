import { FaLeaf, FaUtensils, FaAward, FaHeart } from "react-icons/fa";

import WhyChooseUsCard from "../../../components/why-choose-us/WhyChooseUsCard";
import SectionTitle from "../../../components/common/SectionTitle";

const features = [
  {
    id: 1,
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    description:
      "We carefully select fresh vegetables, premium meats and authentic Vietnamese herbs every day.",
  },
  {
    id: 2,
    icon: <FaUtensils />,
    title: "Authentic Recipes",
    description:
      "Every dish is prepared using traditional recipes that bring the true taste of Vietnam.",
  },
  {
    id: 3,
    icon: <FaAward />,
    title: "Quality Service",
    description:
      "Our friendly team is dedicated to providing a welcoming and memorable dining experience.",
  },
  {
    id: 4,
    icon: <FaHeart />,
    title: "Made with Passion",
    description:
      "Every meal is crafted with passion, attention to detail and a love for Vietnamese cuisine.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-amber-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Why Choose Us"
          title="More Than Just Great Food"
          description="We combine authentic Vietnamese flavors with fresh ingredients, exceptional service and a warm atmosphere."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <WhyChooseUsCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
