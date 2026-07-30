import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Navbar from "./Navbar";
import Button from "../common/Button";

function Header() {
  const [menu_open, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Link
          to="/"
          className="shrink-0 text-xl font-bold text-amber-600 sm:text-2xl"
          onClick={closeMenu}
        >
          BúnBúnBún
        </Link>

        <Navbar className="hidden lg:block" />

        <div className="flex items-center gap-2 sm:gap-3">
          <Button className="hidden sm:inline-flex">Book a Table</Button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-amber-50 hover:text-amber-600 lg:hidden"
            onClick={toggleMenu}
            aria-expanded={menu_open}
            aria-controls="mobile-nav"
            aria-label={menu_open ? "Close menu" : "Open menu"}
          >
            {menu_open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {menu_open && (
        <div
          id="mobile-nav"
          className="border-t border-gray-100 bg-white lg:hidden"
        >
          <Navbar mobile onLinkClick={closeMenu} />

          <div className="border-t border-gray-100 px-4 pb-4 sm:hidden">
            <Button className="w-full">Book a Table</Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
