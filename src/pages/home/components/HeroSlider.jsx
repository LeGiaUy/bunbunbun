import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../../../assets/images/hero/hero1.jpg";
import banner2 from "../../../assets/images/hero/hero2.jpg";
import banner3 from "../../../assets/images/hero/hero3.jpg";

const slides = [
  {
    image: banner1,
    title: "Authentic Vietnamese Cuisine",
    description: "Fresh ingredients. Traditional flavours.",
  },
  {
    image: banner2,
    title: "Book Your Table Today",
    description: "Perfect for family and friends.",
  },
  {
    image: banner3,
    title: "Order Online",
    description: "Fast delivery & takeaway.",
  },
];

function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 4000 }}
      loop
      pagination={{ clickable: true }}
      navigation
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[min(70vh,600px)] min-h-[320px] sm:min-h-[420px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6">
              <h1 className="mb-3 max-w-3xl text-3xl font-bold sm:mb-4 sm:text-4xl lg:text-5xl">
                {slide.title}
              </h1>

              <p className="mb-6 max-w-xl text-base sm:mb-8 sm:text-lg lg:text-xl">
                {slide.description}
              </p>

              <button
                type="button"
                className="rounded bg-amber-600 px-5 py-2.5 text-sm hover:bg-amber-700 sm:px-6 sm:py-3 sm:text-base"
              >
                Book a Table
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
