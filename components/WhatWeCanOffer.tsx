import { motion } from 'framer-motion';
import React from 'react';

function WhatWeCanOffer() {
  return (
    <div className="flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12">
      <div className="flex justify-center items-center 3xl:max-w-6xl w-full flex-col">
        <motion.h2
          initial={{ opacity: 0, x: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 1, type: 'easeInOut' },
          }}
          className="font-poppins dark:text-white text-pro-w-black font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center"
        >
          What We Can Offer
        </motion.h2>
        <div className="flex justify-center items-center flex-wrap mt-10">
          <AddonServiceCard />
          <AddonServiceCard />
          <AddonServiceCard />
        </div>
      </div>
    </div>
  );
}

export default WhatWeCanOffer;

function AddonServiceCard() {
  return (
    <div className="flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] dark:bg-pro-black-1 bg-pro-w-white hover:shadow-lg dark:hover:bg-pro-black-2 hover:bg-[#565656] dark:shadow-inherit shadow-pro-w-shadow2">
      <h3 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] dark:text-[#FFFFFF] text-pro-w-black mb-5">
        Content Management System
      </h3>
      <p className="font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal dark:text-[#A3B3BC] text-[#5B6478]">
        Take complete control of the content on your website with a content
        management system. Add new items to your store, more posts to your blog
        with a power extra to your website offering you full control your
        content.
      </p>
    </div>
  );
}
