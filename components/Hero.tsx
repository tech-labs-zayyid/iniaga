import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles, { component } from "@/styles/style";
import { icScreen1, icScreen2, icScreen3, icArrowRight } from "@/public/assets";

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className={`text-center sm:pt-16 pt-6`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-[20px]`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[35px] text-white ss:leading-[100px] leading-[45px]">
            Penjualan Optimal <br className="sm:block hidden" />
            <span className="text-[#247bfe]">Teknologi</span> Masa Kini
          </h1>
        </div>
        <p className={`${styles.paragraph} mt-5`}>
          Tim ahli kami siap membantu Anda menemukan aplikasi penjualan terbaik sesuai kebutuhan bisnis.
          <br className="sm:block hidden" />
          Dengan analisis fitur, biaya, dan manfaat, kami memastikan solusi optimal untuk meningkatkan
          performa dan produktivitas tim Anda.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 my-10">
        <Link
          href="/register"
          className={`px-6 py-4 ss:px-8 ss:py-5 ${component.btnPrimary} flex items-center justify-center gap-2 group`}
        >
          <span className="leading-[32px]">Registration</span>
          <Image
            src={icArrowRight}
            alt="arrow"
            className="w-[8%] ss:w-[20%] h-auto transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="#wrapperContent"
          className={`px-6 py-4 ss:px-8 ss:py-5 ${component.btnSecondary} text-center`}
        >
          Learn More
        </Link>
      </div>

      <div className={`${styles.flexCenter} flex-1 flex mt-[93px] relative align-center sm:px-16 px-6`}>
        <Image
          src={icScreen2}
          alt="screen2"
          className="w-[23%] ss:w-[20%] h-auto z-[6] rounded-xl absolute ss:start-16 start-6 shadow-sm transition-transform duration-500"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <Image
          src={icScreen1}
          alt="screen1"
          className="w-[90%] ss:w-[70%] h-[100%] z-[5] rounded-xl relative"
        />
        <Image
          dir="rtl"
          src={icScreen3}
          alt="screen3"
          className="w-[23%] ss:w-[25%] h-auto z-[6] rounded-xl absolute ss:start-16 start-6 shadow-sm transition-transform duration-500"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
      </div>
    </section>
  );
};

export default Hero;
