import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { sliders } from "../constant/constant";
import { Link } from "react-router-dom";

const Silder = () => (
  <div className="flex items-center justify-center flex-col h-[600px]">
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
        500: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        690: {
          slidesPerView: 1.75,
          spaceBetween: 15,
        },
        970: {
          slidesPerView: 2.25,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 25,
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
      className="w-full custom-swiper"
    >
      {sliders.map((item) => (
        <SwiperSlide key={item.title} className="space-y-5">
          <div className="w-72 ss:w-[370px] h-[430px] bg-gray_vetcor rounded-md">
            <img src={item.img} alt={item.name} className="scale-90" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-medium">{item.name}</h2>
            <p>{item.paragraph}</p>
            <div className="flex items-center gap-5">
              <button type="button">
                <Link to="">{item.icon_Twitter}</Link>
              </button>
              <button type="button">
                <Link to="">{item.icon_Instagram}</Link>
              </button>
              <button type="button">
                <Link to="">{item.icon_LinkedinIn}</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Silder;
