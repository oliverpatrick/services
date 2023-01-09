import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ITextSectionProps {
  title: string;
  text: string | ReactNode;
}

function TextSection({ title, text }: ITextSectionProps) {
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
          className="pb-1 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow to-orange font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, type: 'easeInOut' },
          }}
        >
          {text}
        </motion.div>
      </div>
    </div>
  );
}

export default TextSection;
