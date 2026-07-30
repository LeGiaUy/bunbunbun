function GalleryCard({ image, alt }) {
  return (
    <article className="group overflow-hidden rounded-xl">
      <img
        src={image}
        alt={alt}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-72"
      />
    </article>
  );
}

export default GalleryCard;
