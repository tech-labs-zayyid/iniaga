"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles, { component } from "@styles/style";
import { close, logo1, menu, icArrowRight } from "@/public/assets";
import { navLinks } from "@/constants";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative">
      <Image src={logo1} priority alt="Iniaga" width={134} height={40} />

      {/* Menu Desktop */}
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <Link href={`#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="hidden sm:flex">
        <Link
          href="#pricingPlant"
          className={`ss:w-full ${component.btnPrimary}`}
        >
          Register
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          className="rounded-xl p-4 bg-[#247bfe] absolute z-10"
          onClick={() => setToggle((prev) => !prev)}
        >
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="object-contain w-[24px] h-[24px]"
            width={28}
            height={28}
          />
        </button>

        {/* Menu Overlay Fullscreen */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/100 flex flex-col items-center justify-center transition-opacity duration-300 ${
            toggle ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="list-none w-full flex flex-col items-start space-y-10 my-auto mr-auto px-6">
            {navLinks.map((nav) => (
              <li key={nav.id} className="text-white text-2xl font-medium">
                <Link href={`#${nav.id}`} onClick={() => setToggle(false)}>
                  {nav.title}
                </Link>
              </li>
            ))}
            <li className="w-full">
              <Link
                href="#pricingPlant"
                className={`px-6 py-3 sm:px-8 sm:py-4 !w-[100%] ${component.btnPrimary} flex items-center justify-center gap-2 group`}
                onClick={() => setToggle(false)}
              >
                <span className="leading-[32px]">Registration</span>
                <Image
                  src={icArrowRight}
                  alt="arrow"
                  className="w-[20px] h-auto transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </li>
          </ul>

          {/* Gambar Pindah ke Paling Bawah */}
          <Image
            src={logo1}
            priority
            alt="Iniaga"
            width={134}
            height={40}
            className="mt-auto pb-10"
          />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
