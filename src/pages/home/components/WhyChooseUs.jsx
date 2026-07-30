import { FaLeaf, FaUtensils, FaAward, FaHeart } from "react-icons/fa";

import WhyChooseUsCard from "../../../components/why-choose-us/WhyChooseUsCard";

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
        <div className="mb-14 text-center">
          <p className="mb-2 font-semibold uppercase tracking-[0.3em] text-amber-600">
            Why Choose Us
          </p>

          <h2 className="mb-4 text-4xl font-bold">More Than Just Great Food</h2>

          <p className="mx-auto max-w-2xl text-gray-600">
            We combine authentic Vietnamese flavors with fresh ingredients,
            exceptional service and a warm atmosphere to create an unforgettable
            dining experience.
          </p>
        </div>

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
