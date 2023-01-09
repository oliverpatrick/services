import { motion } from 'framer-motion';
import React from 'react';

interface IAddonServiceCard {
  title: string;
  text: string;
}

function AddonServiceCard({ title, text }: IAddonServiceCard) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1, type: 'easeIn' },
      }}
      className="flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] dark:bg-pro-black-1 bg-pro-w-white hover:shadow-lg dark:hover:bg-pro-black-2 hover:bg-[#565656] dark:shadow-inherit shadow-pro-w-shadow2"
    >
      <h3 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] dark:text-[#FFFFFF] text-pro-w-black mb-5">
        {title}
      </h3>
      <p className="font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal dark:text-[#A3B3BC] text-[#5B6478]">
        {text}
      </p>
    </motion.div>
  );
}

export default AddonServiceCard;
