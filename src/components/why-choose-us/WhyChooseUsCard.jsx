function WhyChooseUsCard({ icon, title, description }) {
  return (
    <article className="rounded-xl bg-white p-6 text-center shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
      <div className="mb-4 flex justify-center text-4xl text-amber-600 sm:mb-5 sm:text-5xl">
        {icon}
      </div>

      <h3 className="mb-2 text-xl font-semibold sm:mb-3 sm:text-2xl">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">{description}</p>
    </article>
  );
}

export default WhyChooseUsCard;
