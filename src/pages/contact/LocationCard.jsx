function LocationCard({ name, address, phone, hours, mapUrl }) {
  return (
    <div className="space-y-6 rounded-xl bg-white p-8 shadow">
      <div>
        <h3 className="mb-4 text-2xl font-bold">{name}</h3>

        <div className="space-y-3 text-gray-600">
          <p>{address}</p>

          <p>{phone}</p>

          <p>{hours}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg">
        <iframe
          title={`${name} location`}
          src={mapUrl}
          width="100%"
          height="350"
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
