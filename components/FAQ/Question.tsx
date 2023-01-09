import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

function QuestionItem({ label, content }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex w-full justify-start items-start flex-col mb-8 border-b dark:border-[#D0DFFF] border-[#D0DFFF] z-10">
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="my-3 font-poppins font-semibold xs:text-2xl xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] flex-1 dark:text-[#D0DFFF] text-[#3A4556]">
          {label}
        </h3>

        <div
        // className="relative w-4 ml-2 cursor-pointer"
        >
          {expanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="overflow-hidden"
          >
            <p className="p-3 overflow-y-hidden font-poppins xs:text-md xs:leading-6 text-md leading-5 font-normal mb-4 dark:text-[#A3B3BC] text-[#5B6478]">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Accordion() {
  return (
    <div className="w-full max-w-6xl" role="tablist">
      {panels.map((panel, index) => (
        <QuestionItem key={index} index={index} {...panel} />
      ))}
    </div>
  );
}

export default Accordion;

const panels = [
  {
    label: "Seriously, Don't Use Icon Fonts",
    content:
      'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
  },
  {
    label: 'Screen Readers Actually Read That Stuff',
    content:
      'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
  },
  {
    label: 'They Fail Poorly and Often',
    content:
      'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
  },
];
