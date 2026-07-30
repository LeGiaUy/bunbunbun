import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Button from "../common/Button.jsx";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">BúnBúnBún</h2>

          <p className="mb-6 leading-7">
            Authentic Vietnamese street food served fresh every day.
          </p>

          <div className="space-y-2">
            <p>
              <span className="font-semibold text-white">Email:</span>
              <br />
              hello@bunbunbun.co
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-amber-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-amber-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Hoxton */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Hoxton</h3>

          <p>134B Kingsland Road</p>
          <p>London, E2 8DY</p>

          <p className="mt-3">020 7729 6494</p>

          <div className="mt-5 space-y-1 text-sm leading-6">
            <p>Mon–Thu: 12:00–15:30 & 17:30–22:30</p>
            <p>Fri: 12:00–15:30 & 17:30–23:00</p>
            <p>Sat: 12:00–23:00</p>
            <p>Sun: 12:00–22:30</p>
          </div>

          <Button className="mt-6">Book a Table</Button>
        </div>

        {/* Dalston */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Dalston</h3>

          <p>511 Kingsland Road</p>
          <p>London, E8 4AR</p>

          <p className="mt-3">020 3726 5587</p>

          <div className="mt-5 space-y-1 text-sm leading-6">
            <p>Mon–Thu: 12:00–15:30 & 17:30–22:30</p>
            <p>Fri: 12:00–15:30 & 17:30–23:00</p>
            <p>Sat: 12:00–23:00</p>
            <p>Sun: 12:00–22:30</p>
          </div>

          <Button className="mt-6">Book a Table</Button>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-400">
        © 2026 BúnBúnBún. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
