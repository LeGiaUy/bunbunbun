function GalleryCard({ image, alt }) {
  return (
    <article className="group overflow-hidden rounded-xl">
      <img
        src={image}
        alt={alt}
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
      />
    </article>
  );
}

export default GalleryCard;
