import { Link } from "react-router-dom";

import Button from "../../../components/common/Button";

function BookTableCTA() {
  return (
    <section className="relative overflow-hidden bg-amber-600 py-16 sm:py-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.3em]">
          Reservation
        </p>

        <h2 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl lg:text-5xl">
          Reserve Your Table Today
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-white/90 sm:mb-10 sm:text-lg sm:leading-8">
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
