import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar({ mobile = false, onLinkClick, className = "" }) {
  const listClass = mobile
    ? "flex flex-col gap-1 px-4 py-4 sm:px-6"
    : "flex items-center gap-6 lg:gap-8";

  const linkClass = mobile
    ? "block rounded-lg px-3 py-3 text-lg"
    : "";

  return (
    <nav className={className} aria-label="Main navigation">
      <ul className={listClass}>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              onClick={onLinkClick}
              className={({ isActive }) =>
                [
                  linkClass,
                  isActive
                    ? "font-semibold text-amber-600"
                    : "text-gray-700 hover:text-amber-600",
                  mobile && !isActive ? "hover:bg-amber-50" : "",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
