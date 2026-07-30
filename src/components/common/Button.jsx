import clsx from "clsx";

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded font-medium transition duration-300 cursor-pointer";

  const variants = {
    primary: "bg-amber-600 text-white hover:bg-amber-700",
    secondary:
      "border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white",
    dark: "bg-gray-900 text-white hover:bg-gray-800",
    ghost: "text-amber-600 hover:bg-amber-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
