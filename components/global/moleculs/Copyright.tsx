import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/style";
import { logo1 } from "@/public/assets";

const Copyright: React.FC = () => (
  <div className={`${styles.flexCenter} bg-gray-900 py-6 text-white`}>
    <div className={`${styles.boxWidth} w-full px-6`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Image src={logo1} priority alt="Iniaga" width={134} height={40} />

        {/* Copyright Text */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Iniaga | Designed by{" "}
          <Link href="https://www.iniaga.id" className="text-blue-400 hover:underline">
            Iniaga
          </Link>{" "}
          - Powered by{" "}
          <Link href="https://www.zayyid.vercel.app" className="text-blue-400 hover:underline">
            Zayyid Tujuh Selaras
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default Copyright;
