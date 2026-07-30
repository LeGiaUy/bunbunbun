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
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 sm:text-sm sm:tracking-[0.3em]">
          {subtitle}
        </p>
      )}

      <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p
          className={`text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 ${
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
