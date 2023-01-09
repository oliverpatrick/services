import { motion } from 'framer-motion';
import React from 'react';
import AddonServiceCard from './Cards/AddonServiceCard';

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
          className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow to-orange font-poppins font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center"
        >
          What We Can Offer
        </motion.h2>
        <div className="max-w-5xl flex justify-center items-center flex-wrap mt-10">
          {serviceCard.map((card, idx) => (
            <AddonServiceCard key={idx} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeCanOffer;

const serviceCard = [
  {
    title: 'Content Management System',
    text: 'Take complete control of the content on your website with a content management system. Add new items to your store, more posts to your blog with a power extra to your website offering you full control your content.',
  },
  {
    title: 'Login authentication',
    text: 'Allow members to be involved in your community! Add login and member authentication to your website. Build your business and expand. Add members to mailing lists and get people excited about all your latest offers.',
  },
];
