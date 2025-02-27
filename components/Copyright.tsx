import React from 'react'
import Image from 'next/image'
import { socialMedia } from "@/constants";

const Copyright: React.FC = () => (
  <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
      2025 Iniaga. All Rights Reserved.
    </p>
    <div className="flex flex-row md:mt-0 mt-6">
      {socialMedia.map((social, index) => (
        <Image
          src={social.icon}
          key={social.id}
          alt={social.id}
          className={`w-[21px] h-[21px] object-contain cursor-pointer ${
            index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
          }`}
        />
      ))}
    </div>
  </div>
)

export default Copyright
