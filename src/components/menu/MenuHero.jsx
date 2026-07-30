import SectionTitle from "../common/SectionTitle";

function MenuHero() {
  return (
    <section className="bg-amber-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Our Menu"
          title="Discover Our Signature Dishes"
          description="Explore a selection of authentic Vietnamese cuisine, prepared with fresh ingredients and traditional recipes."
        />
      </div>
    </section>
  );
}

export default MenuHero;
