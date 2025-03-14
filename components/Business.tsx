import styles, { layout } from "@/styles/style";
import { features } from "@/constants";
import Image from "next/image";
import { FeatredCardProps } from "@types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const FeaturesCard: React.FC<FeatredCardProps> = ({ icon, title, content }) => (
  <div className="flex flex-col items-start bg-sky-100 rounded-xl p-4 h-[450px]">
    <div className="w-full h-[300px] rounded-lg flex items-center justify-center">
      <Image
        src={icon}
        alt="icon"
        width={300}
        height={300}
        className="object-contain"
      />
    </div>
    <div className="mt-auto">
      <h4 className="font-poppins font-semibold text-black mt-4 mb-2 text-start">
        {title}
      </h4>
      <p className="font-poppins font-normal text-gray-500 text-[14px]">
        {content}
      </p>
    </div>
  </div>
);

const Business: React.FC = () => (
  <section id="features" className="py-12">
    <div className="container mx-auto">
      <div className={layout.sectionInfo}>
        <h2 className={`text-center ${styles.heading2}`}>
          Anda fokus pada product, <br className="sm:block hidden" />
          Kami urus semuanya.
        </h2>
      </div>
      <p className={`${styles.paragraph} mt-5`}>
        Dengan aplikasi ini, Anda bisa merekrut agen, mengelola penjualan, dan
        meningkatkan jangkauan pasar dengan mudah. Kami menyediakan semua tools
        yang dibutuhkan untuk mendongkrak penjualan Anda dan memperluas jaringan
        agen.
      </p>
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {features.map((feature, index) => (
          <FeaturesCard key={index} {...feature} index={index} />
        ))}
      </div>
      <div className="block md:hidden mt-6">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          pagination={{ clickable: true }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <FeaturesCard {...feature} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
);

export default Business;
