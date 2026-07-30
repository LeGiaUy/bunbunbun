import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import Button from "../common/Button.jsx";

const ICON_CLASS = "h-4 w-4 shrink-0 text-amber-500";

const OPENING_HOURS = [
  "Mon–Thu: 12:00–15:30 & 17:30–22:30",
  "Fri: 12:00–15:30 & 17:30–23:00",
  "Sat: 12:00–23:00",
  "Sun: 12:00–22:30",
];

function FooterLocationColumn({ title, addressLine1, addressLine2, phone, phoneTel }) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>

      <p className="flex items-start gap-3">
        <FaMapMarkerAlt className={`${ICON_CLASS} mt-1`} aria-hidden />
        <span>
          {addressLine1}
          <br />
          {addressLine2}
        </span>
      </p>

      <p className="mt-3 flex items-center gap-3">
        <FaPhone className={ICON_CLASS} aria-hidden />
        <a href={`tel:${phoneTel}`} className="transition hover:text-white">
          {phone}
        </a>
      </p>

      <div className="mt-5 flex gap-3 text-sm leading-6">
        <FaClock className={`${ICON_CLASS} mt-0.5`} aria-hidden />
        <div className="space-y-1">
          {OPENING_HOURS.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <Button className="mt-6">Book a Table</Button>
    </div>
  );
}

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

          <div className="space-y-4">
            <p className="flex items-start gap-3">
              <FaEnvelope className={`${ICON_CLASS} mt-1`} aria-hidden />
              <span>
                <span className="font-semibold text-white">Email:</span>
                <br />
                <a
                  href="mailto:hello@bunbunbun.co"
                  className="transition hover:text-white"
                >
                  hello@bunbunbun.co
                </a>
              </span>
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-amber-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-amber-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <FooterLocationColumn
          title="Hoxton"
          addressLine1="134B Kingsland Road"
          addressLine2="London, E2 8DY"
          phone="020 7729 6494"
          phoneTel="+442077296494"
        />

        <FooterLocationColumn
          title="Dalston"
          addressLine1="511 Kingsland Road"
          addressLine2="London, E8 4AR"
          phone="020 3726 5587"
          phoneTel="+442037265587"
        />
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-400">
        © 2026 BúnBúnBún. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
