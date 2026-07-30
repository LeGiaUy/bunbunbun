import { Link } from "react-router-dom";

import MenuCard from "../../../components/menu/MenuCard";
import Button from "../../../components/common/Button";

import bunCha from "../../../assets/images/menu/bun-cha.jpg";
import springRoll from "../../../assets/images/menu/spring-roll.jpg";
import banhMi from "../../../assets/images/menu/banh-mi.jpg";
import salad from "../../../assets/images/menu/salad.jpg";

const featuredDishes = [
  {
    id: 1,
    image: bunCha,
    name: "Bún Chả",
    description:
      "Grilled pork served with rice noodles, fresh herbs and dipping sauce.",
    price: "14.99",
  },
  {
    id: 2,
    image: salad,
    name: "Fresh Garden Salad",
    description:
      "A refreshing mix of crisp lettuce, cherry tomatoes, cucumber, avocado and house dressing.",
    price: "11.99",
  },

  {
    id: 3,
    image: springRoll,
    name: "Fresh Spring Rolls",
    description: "Rice paper rolls filled with shrimp, herbs and vermicelli.",
    price: "8.99",
  },
  {
    id: 4,
    image: banhMi,
    name: "Bánh Mì",
    description:
      "Vietnamese baguette with grilled pork, pickled vegetables and herbs.",
    price: "10.99",
  },
];

function FeaturedMenu() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-amber-600">
            Our Specials
          </p>

          <h2 className="mb-4 text-4xl font-bold">Featured Dishes</h2>

          <p className="mx-auto max-w-2xl text-gray-600">
            Discover some of our most popular Vietnamese dishes, prepared with
            fresh ingredients and authentic recipes.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((dish) => (
            <MenuCard key={dish.id} {...dish} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/menu">
            <Button size="lg">View Full Menu</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMenu;
