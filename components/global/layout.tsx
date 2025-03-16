"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/style";
import { Navbar, Footer, Copyright } from "@/components";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showNavbar = !pathname.startsWith("/register");
  const showFooter = !pathname.startsWith("/register");

  // Cek apakah navbar dan footer ditampilkan
  const hasNavbarOrFooter = showNavbar || showFooter;

  return (
    <div
      className={`w-full min-h-screen overflow-hidden ${
        hasNavbarOrFooter
          ? "bg-[#171717] bg-[url(https://cdn.prod.website-files.com/62953ab463d9335a094b424b/62962ca34836cd068a0e950a_bg-grid-techkit-template.svg)]"
          : "bg-white"
      }`}
    >
      {showNavbar && (
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center ${
            isScrolled ? "bg-[#171717]" : "transparent"
          }`}
        >
          <div className={`${styles.paddingX} ${styles.marginXauto} ${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      )}

      <main className="flex-grow">{children}</main>

      {showFooter && <Footer />}
      {!hasNavbarOrFooter && <Copyright/>}
    </div>
  );
};

export default Layout;
