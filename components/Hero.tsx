import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const animateRight = {
  hidden: { opacity: 0, x: 100, y: 0 },
  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, type: 'easeInOut' },
  },
};

const animateLeft = {
  hidden: { opacity: 0, x: -100, y: 0 },
  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, type: 'easeInOut' },
  },
};

interface IHero {
  tagline: string;
  title: string | ReactNode;
  description: string;
  imageSrc: string;
  reversed?: boolean;
}

const Hero = ({ tagline, title, description, imageSrc, reversed }: IHero) => {
  const textContent = (
    <motion.div
      initial={reversed ? animateRight.hidden : animateLeft.hidden}
      whileInView={reversed ? animateRight.inView : animateLeft.inView}
      className={`flex-1 flex flex-col w-full  justify-center ${
        reversed ? 'items-end' : 'items-start'
      } pt-12 pb-24 px-6 relative`}
    >
      <p className="uppercase tracking-loose">{tagline}</p>
      <h1 className="my-4 text-4xl font-bold md:text-6xl">{title}</h1>
      <p className="mb-4 text-lg leading-normal">{description}</p>
      <button className="px-4 py-2 mt-5 text-gray-900 bg-transparent border border-gray-900 shadow hover:bg-gray-900 hover:text-white rounded-3xl hover:shadow-lg hover:border-transparent">
        Super Button
      </button>
    </motion.div>
  );

  const imageContent = (
    <div className="w-full text-center lg:w-1/2 lg:py-6 lg:ml-10">
      <motion.img
        initial={reversed ? animateLeft.hidden : animateRight.hidden}
        whileInView={reversed ? animateLeft.inView : animateRight.inView}
        className="relative w-full"
        src={imageSrc}
        alt="Hero Image"
      />
    </div>
  );

  return (
    <div className="flex items-center justify-center px-6 pt-6 pb-12 overflow-x-hidden sm:px-16 sm:pb-16 xs:pb-8">
      {reversed ? (
        <section className="container flex flex-col items-center mx-auto my-12 lg:flex-row md:my-24 ">
          {imageContent}
          {textContent}
        </section>
      ) : (
        <section className="flex justify-center items-center 3xl:max-w-[1280px] w-full pt-[98px] lg:flex-row flex-col max-w-[1300px]">
          {textContent}
          {imageContent}
        </section>
      )}
    </div>
  );
};

export default Hero;
