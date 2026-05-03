import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slider from "../../assets/logoimg/Img2.webp"
import slider2 from "../../assets/logoimg/Img1.webp"
import slider3 from "../../assets/logoimg/Img4.webp"


import { Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[80vh] text-red"
      >
        <SwiperSlide>
          <div className="h-full bg-red-200 flex items-center justify-center text-2xl font-semibold">
          <img src={slider} className="w-full h-full" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full bg-blue-200 flex items-center justify-center text-2xl font-semibold">
          <img src={slider2} className="w-full" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full bg-green-200 flex items-center justify-center text-2xl font-semibold">
           <img src={slider3} className="w-full" alt="" />
          </div>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
}