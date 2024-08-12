import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { slider_home_array } from "../constant/constant";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero_slider = () => (
  <div className="flex items-center justify-center flex-col h-[400px]">
    <Swiper
      breakpoints={{
        1250: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="w-full h-full custom-swiper"
    >
      {slider_home_array.map((item, i) => (
        <SwiperSlide key={item.uid} className="relative bg-black">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 max-sm:hidden p-8">
            <div className="text-white space-y-4">
              <h2 className="text-xl md:text-3xl font-semibold">
                {item.title}
              </h2>
              <p className="text-4xl md:text-5xl font-bold">
                Up to 10% off Voucher
              </p>
              <Link
                to={`/${item.category}/${item.title}?id=${item.uid}`}
                className="mt-4 flex items-center gap-3 w-fit"
              >
                Shop Now
                <FaArrowRightLong size={20} className="animation_arrow" />
              </Link>
            </div>
          </div>
          <div className="absolute right-1/2 sm:right-0 top-1/2 -translate-y-1/2 max-sm:translate-x-1/2 w-11/12 h-5/6 sm:w-1/2">
            <img src={item.img} alt={item.title} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Hero_slider;
