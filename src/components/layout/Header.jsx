import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Button from "../common/Button";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-2xl font-bold text-amber-600">
          BúnBúnBún
        </Link>

        <Navbar />

        <Button>Book a Table</Button>
      </div>
    </header>
  );
}

export default Header;
