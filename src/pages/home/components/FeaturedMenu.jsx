import { Link } from "react-router-dom";

import MenuCard from "../../../components/menu/MenuCard";
import Button from "../../../components/common/Button";
import SectionTitle from "../../../components/common/SectionTitle";

import menu from "../../../data/menu";

const featuredDishes = menu.slice(0, 4);

function FeaturedMenu() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Our Specials"
          title="Featured Dishes"
          description="Discover some of our most popular Vietnamese dishes, prepared with fresh ingredients and authentic recipes."
        />
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
