"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  RegisterForm,
  Testimonials,
  Clients,
  CTA,
  Footer,
  PriceList,
  Copyright,
} from "@/components";

const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    fetch("https://date.nager.at/api/v3/PublicHolidays/2025/ID")
      .then((response) => response.json())
      .then((data) => console.log(data)) // Menampilkan daftar hari libur
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex justify-center ${isScrolled ? "bg-white shadow-md shadow-gray-300" : "bg-transparent"}`}>
          <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
        </div>
        <div className={`bg-white ${styles.flexStart} pt-20`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            {/* <Billing /> */}
            {/* <CardDeal /> */}
            <Testimonials />
            <PriceList />
            {/* <RegisterForm /> */}
            {/* <Clients /> */}
          </div>
        </div>
        <CTA />
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Home;
