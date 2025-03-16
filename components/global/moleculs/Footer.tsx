// import {
//   DribbbleIcon,
//   GithubIcon,
//   TwitchIcon,
//   TwitterIcon,
// } from "lucide-react";
import Image from 'next/image'
import Link from "next/link";
import { logoDark, logo1 } from "@/public/assets";
import { navLinks } from "@/constants";

const footerLinks = [
  {
    title: "Overview",
    href: "#",
  },
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "Privacy",
    href: "#",
  },
];

const FooterComponent = () => {
  return (
    <footer className="bg-[#171717] text-black py-12 px-4 flex justify-center">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          <Image
            src={logo1}
            alt="Iniaga"
            className="w-[200px] object-contain mb-4"
          />

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`  font-normal cursor-pointer text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                }`}
              >
                <Link href={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-center gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-white text-center">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              Iniaga
            </Link>
            . All rights reserved.
          </span>

          {/* <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="#" target="_blank">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <DribbbleIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <TwitchIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
