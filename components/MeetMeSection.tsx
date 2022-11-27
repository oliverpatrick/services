import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

function MeetMeSection() {
  return (
    <div className="flex items-center justify-center px-6 py-12 sm:p-16 xs:p-8">
      <div className="flex justify-center items-center 3xl:max-w-[1280px] w-full overflow-hidden flex-col">
        <motion.h1
          initial={{ opacity: 0, x: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 1, type: 'easeInOut' },
          }}
          className="dark:text-white text-pro-w-black font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center"
        >
          Meet The Developer:
          <br />
          <Link href="https://www.opdev.co.uk">
            <span className="text-gradient">Oliver Patrick</span>
          </Link>
        </motion.h1>

        <p className="max-w-5xl my-5 text-xl font-normal leading-6 text-justify xs:px-8 font-poppins xs:text-2xl xs:leading-7 dark:dark-text text-light-text">
          {`My name is Oliver, I'm a full stack developer located in Leeds. I've
          been working in React for most of my career making incredible medical
          software for general practicioners and NHS staff alike.`}
        </p>

        <p className="max-w-5xl my-5 text-xl font-normal leading-6 text-justify font-poppins xs:text-2xl xs:px-8 xs:leading-7 dark:dark-text text-light-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          tincidunt justo. Phasellus nibh libero, laoreet nec pharetra eget,
          finibus vitae arcu. Pellentesque facilisis sapien non nibh imperdiet
          egestas. Sed tellus orci, vestibulum a nunc non, iaculis porta lacus.
          Mauris efficitur arcu vel magna tristique ultrices. Maecenas faucibus
          turpis sit amet urna volutpat semper. Vivamus egestas dui lorem, non
          iaculis risus aliquam pellentesque. Sed vitae congue velit.
        </p>
      </div>
    </div>
  );
}

export default MeetMeSection;
