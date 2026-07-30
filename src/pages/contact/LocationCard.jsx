import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ICON_CLASS = "h-4 w-4 shrink-0 text-amber-500";

function LocationCard({ name, address, phone, phoneTel, hours, mapUrl }) {
  return (
    <div className="space-y-5 rounded-xl bg-white p-5 shadow sm:space-y-6 sm:p-8">
      <div>
        <h3 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">{name}</h3>

        <div className="space-y-3 text-gray-600">
          <p className="flex items-start gap-3">
            <FaMapMarkerAlt className={`${ICON_CLASS} mt-1`} aria-hidden />
            <span>{address}</span>
          </p>

          <p className="flex items-center gap-3">
            <FaPhone className={ICON_CLASS} aria-hidden />
            <a
              href={`tel:${phoneTel}`}
              className="transition hover:text-amber-600"
            >
              {phone}
            </a>
          </p>

          <p className="flex items-start gap-3">
            <FaClock className={`${ICON_CLASS} mt-1`} aria-hidden />
            <span>{hours}</span>
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg">
        <iframe
          title={`${name} location`}
          src={mapUrl}
          width="100%"
        className="h-56 w-full sm:h-72 lg:h-[350px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen=""
        />
      </div>
    </div>
  );
}

export default LocationCard;
