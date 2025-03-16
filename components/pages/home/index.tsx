"use client";

import styles from "@/styles/style";
import {
  Business,
  CTA,
  Hero,
  Stats,
  Testimonials,
  PriceList
} from "./components";

const Home: React.FC = () => {
  return (
    <>
      <div className={`${styles.flexStart} pt-20`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className="bg-white rounded-[50px] pt-14 ss:pt-[50px] block sm:flex sm:justify-center">
        <div className={`${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
          </div>
        </div>
      </div>
      <div
        id="wrapperContent"
        className={`${styles.flexStart} pt-14`}
      >
        <div className={`${styles.boxWidth}`}>
          <Testimonials />
          <PriceList />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart} mb-14`}>
        <div className={`${styles.boxWidth}`}>
          <CTA />
        </div>
      </div>
    </>
  );
};

export default Home;
