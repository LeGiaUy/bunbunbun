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
          <div className="relative h-[600px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h1 className="mb-4 text-5xl font-bold">{slide.title}</h1>

              <p className="mb-8 text-xl">{slide.description}</p>

              <button className="rounded bg-amber-600 px-6 py-3 hover:bg-amber-700">
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
