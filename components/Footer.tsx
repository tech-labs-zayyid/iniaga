import styles from "@/styles/style";
import { logoDark } from "@/public/assets";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="bg-white text-black py-12 px-4 flex justify-center">
    <div className={`${styles.boxWidth}`}>
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
        {/* Bagian Logo & Deskripsi */}
        <div className="md:w-1/3 flex flex-col">
          <Image
            src={logoDark}
            alt="Iniaga"
            className="w-[200px] object-contain mb-4"
          />
          <p className="text-gray-400 text-sm max-w-[310px]">
            The Next Generation Sales Tools.
          </p>
        </div>

        {/* Bagian Link */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:w-2/3 mt-6 md:mt-0">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id} className="min-w-[150px]">
              <h4 className="font-semibold text-lg text-white">
                {footerLink.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-gray-400 text-sm hover:text-white cursor-pointer transition duration-300"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bagian Sosial Media */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <div className="flex justify-center space-x-6">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.icon}
                alt={social.id}
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-75 transition duration-300"
              />
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Iniaga. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
