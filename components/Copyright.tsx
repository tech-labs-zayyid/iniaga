import React from 'react'
import Image from 'next/image'
import { socialMedia } from "@/constants";

const Copyright: React.FC = () => (
  <div className="w-full flex justify-between items-center md:flex-row flex-col p-4 bg-black">
    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
      2025 Iniaga. All Rights Reserved.
    </p>
  </div>
)

export default Copyright
