import Image from "next/image";
import styles from "@/styles/style";
import { discount, web } from "@/public/assets";
import GetStarted from "./GetStarted";

const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]">
          Penjualan Optimal <br className="sm:block hidden" />{" "}dengan{" "}
          <span className="text-gray-500">Teknologi</span>{" "}
        </h1>
      </div>
      <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px]">
      Masa Kini
      </h1>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
        Tim ahli kami siap membantu Anda menemukan aplikasi penjualan terbaik yang sesuai dengan kebutuhan bisnis Anda. Dengan metodologi khusus, kami menganalisis fitur, biaya langganan tahunan, dan manfaat lainnya untuk memastikan Anda mendapatkan solusi yang tepat guna meningkatkan performa dan produktivitas tim penjualan Anda.
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      <Image
        src={web}
        alt="billings"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
