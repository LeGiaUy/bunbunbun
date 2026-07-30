function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`${alignment[align]} ${className}`}>
      {subtitle && (
        <p className="mb-2 font-semibold uppercase tracking-[0.3em] text-amber-600">
          {subtitle}
        </p>
      )}

      <h2 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h2>

      {description && (
        <p
          className={`text-gray-600 leading-8 ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
