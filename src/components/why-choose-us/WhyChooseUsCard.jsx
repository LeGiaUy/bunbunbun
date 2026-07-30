function WhyChooseUsCard({ icon, title, description }) {
  return (
    <article className="rounded-xl bg-white p-8 text-center shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex justify-center text-5xl text-amber-600">
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-semibold">{title}</h3>

      <p className="leading-7 text-gray-600">{description}</p>
    </article>
  );
}

export default WhyChooseUsCard;
