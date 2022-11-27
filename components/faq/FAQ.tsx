import { motion } from 'framer-motion';
import React from 'react';
import Accordion from './Accordion';
// import QuestionItem from './QuestionItem';

function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 sm:p-16 xs:p-8">
      <div className="flex justify-center items-center 3xl:max-w-[1280px] w-full flex-col">
        <motion.h2
          initial={{ opacity: 0, x: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 1, type: 'easeIn' },
          }}
          className="font-poppins dark:text-white text-pro-w-black font-bold sm:text-5xl sm:leading-10 text-3xl leading-8 xs:tracking-[-0.5%] tracking-[-0.25%] text-center mb-10"
        >
          Frequently Asked Questions
        </motion.h2>
      </div>

      {/* <div className="lg:w-[80%] w-full max-w-6xl flex justify-center items-center flex-col mt-10">
        <QuestionItem
          questionTitle={'Question 1'}
          answer={`Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the first item's accordion body.`}
        />
        <QuestionItem
          questionTitle={'Question 1'}
          answer={`Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the first item's accordion body.`}
        />{' '}
        <QuestionItem
          questionTitle={'Question 1'}
          answer={`Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the first item's accordion body.`}
        />
      </div> */}
      <Accordion />
    </div>
  );
}

export default FAQ;
