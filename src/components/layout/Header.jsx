import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-2xl font-bold text-amber-600">
          BúnBúnBún
        </Link>

        <Navbar />

        <button className="rounded bg-amber-600 px-5 py-2 text-white transition hover:bg-amber-700">
          Book a Table
        </button>
      </div>
    </header>
  );
}

export default Header;
