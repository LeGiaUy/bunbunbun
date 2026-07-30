import MenuCard from "./MenuCard.jsx";

function MenuGrid({ items }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
      {items.map((item) => (
        <MenuCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default MenuGrid;
