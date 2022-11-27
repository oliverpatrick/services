import { useState } from 'react';

function Panel({ label, content }: any) {
  const [active, setActive] = useState(false);

  const togglePanel = () => {
    setActive(!active);
  };

  return (
    <div
      className="mt-10 max-w-6xl mb-12 pb-6 border-b dark:border-[#D0DFFF] border-[#D0DFFF]"
      // role="tabpanel"
      aria-expanded={active}
    >
      <div
        className="flex items-center justify-between p-2 cursor-pointer"
        role="tab"
        onClick={togglePanel}
      >
        <h4 className="font-poppins font-semibold xs:text-2xl xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] flex-1 dark:text-[#D0DFFF] text-[#3A4556]">
          {label}
        </h4>
        <div
          className={`before:bg-primary-light after:bg-primary-light before:dark:bg-primary-dark after:dark:bg-primary-dark ${
            active ? 'accordion-icon' : 'accordion-icon is-active'
          }`}
        ></div>
      </div>
      <div
        className={active ? 'accordion-content is-active' : 'accordion-content'}
        aria-hidden={active}
      >
        <p
          className={`mx-2 mb-4 font-poppins xs:text-1xl xs:leading-6 text-xl leading-5 font-normal mt-4 dark:text-primary-light text-[#5B6478]`}
        >
          {content}
        </p>
      </div>
    </div>
  );
}

function Accordion() {
  return (
    <div className="w-full max-w-6xl" role="tablist">
      {panels.map((panel, index) => (
        <Panel key={index} index={index} {...panel} />
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
  {
    label: "They're a Nightmare if You're Dyslexic",
    content:
      "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.",
  },
  {
    label: "There's Already a Better Way",
    content:
      "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.",
  },
];
