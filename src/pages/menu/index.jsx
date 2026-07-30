import MenuHero from "../../components/menu/MenuHero";
// import CategoryTabs from "../../components/menu/CategoryTabs";
import MenuGrid from "../../components/menu/MenuGrid";

import menu from "../../data/menu";

function Menu() {
  return (
    <>
      <MenuHero />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* <CategoryTabs /> */}

          <div className="mt-12">
            <MenuGrid items={menu} />
            <MenuGrid items={menu} />
            <MenuGrid items={menu} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
