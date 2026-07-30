import { Link } from "react-router-dom";

import Button from "../../../components/common/Button";

function BookTableCTA() {
  return (
    <section className="relative overflow-hidden bg-amber-600 py-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em]">
          Reservation
        </p>

        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Reserve Your Table Today
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-white/90">
          Experience authentic Vietnamese cuisine in a warm and welcoming
          atmosphere. Whether you're planning a family dinner, a date night or a
          celebration, we'd love to have you with us.
        </p>

        <Link to="/reservation">
          <Button
            size="lg"
            className="bg-white text-amber-600 hover:bg-gray-100"
          >
            Book a Table
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default BookTableCTA;
