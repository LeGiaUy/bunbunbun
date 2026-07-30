import Button from "../common/Button";

function MenuCard({ image, name, description, price }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img src={image} alt={name} className="h-60 w-full object-cover" />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold">{name}</h3>

          <span className="text-lg font-bold text-amber-600">${price}</span>
        </div>

        <p className="flex-1 text-sm leading-6 text-gray-600">{description}</p>

        <div className="mt-6">
          <Button variant="secondary" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;
