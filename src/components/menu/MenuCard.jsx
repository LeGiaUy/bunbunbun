import Button from "../common/Button";

function MenuCard({ image, name, description, price }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img src={image} alt={name} className="h-48 w-full object-cover sm:h-60" />

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="mb-3 flex flex-col gap-1 sm:mb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
          <h3 className="text-lg font-semibold sm:text-xl">{name}</h3>

          <span className="text-base font-bold text-amber-600 sm:text-lg">
            ${price}
          </span>
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
