import { motion } from 'framer-motion';
import { feedback } from '../constants';
import FeedbackCard from './Cards/FeedbackCard';

function Testimonials() {
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
          What People are saying about us
        </motion.h2>
        <div className="max-w-5xl flex justify-center items-center flex-wrap mt-10">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
