import { stats } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Stats: React.FC = () => (
  <section className="sm:mb-20 mb-6">
    <div className="hidden sm:flex flex-row flex-wrap justify-center">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-start items-center flex-row m-3"
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-black">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gray-500 uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
    <div className="block sm:hidden">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1000}
        modules={[Autoplay]}
      >
        {stats.map((stat) => (
          <SwiperSlide key={stat.id}>
            <div className="flex justify-center items-center flex-row">
              <h4 className="font-poppins font-semibold text-[30px] leading-[43px] text-black">
                {stat.value}
              </h4>
              <p className="font-poppins font-normal text-[15px] leading-[21px] text-gray-500 uppercase ml-3">
                {stat.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Stats;
