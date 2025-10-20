import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { slides } from "@/config/slides";

const Carousel: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full"
    >
      {slides.map((slides, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-[350px] md:h-[500px]">
            <img
              src={slides.image}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
            {/* overlay banner */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-6 md:p-10 max-w-xl bg-gradient-to-t from-black/70 to-transparent text-white">
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                  {slides.title}
                </h2>
                {slides.subtitle && (
                  <p className="mt-2 text-sm md:text-base">{slides.subtitle}</p>
                )}
                {slides.cta && (
                  <button
                    className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-md text-sm md:text-base"
                    onClick={() => {
                      /* replace with navigation handler if needed */
                    }}
                  >
                    {slides.cta}
                  </button>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
