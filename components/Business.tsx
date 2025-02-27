import styles, { layout } from "@/styles/style";
import { features } from "@/constants";
import Image from "next/image";
import { FeatredCardProps } from "@types";

const FeaturesCard: React.FC<FeatredCardProps> = ({ icon, title, content }) => (
  <div className="flex flex-col items-center bg-gray-200 rounded-xl p-4 h-[450px]">
    <div className="w-full h-[300px] rounded-lg flex items-center justify-center">
      <Image src={icon} alt="icon" width={300} height={300} className="object-contain" />
    </div>
    <h4 className="font-poppins font-semibold text-black text-[18px] mt-4 text-start">
      {title}
    </h4>
    <p className="font-poppins font-normal text-gray-500 text-[14px]">
      {content}
    </p>
  </div>
);

const Business: React.FC = () => (
  <section id="features" className="py-12">
    <div className="container mx-auto px-4">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {features.map((feature, index) => (
          <FeaturesCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default Business;
