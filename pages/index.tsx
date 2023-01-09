import Clients from '../components/Marquee/Clients';
import FAQ from '../components/FAQ/FAQ';
import Hero from '../components/Heroes/Hero';
import MeetMeSection from '../components/MeetMeSection';
import VideoHero from '../components/Heroes/VideoHero';
import WhatWeCanOffer from '../components/WhatWeCanOffer';
import Footer from '../components/Footer';
import ContactOrb from '../components/ContactOrb';
import TextSection from '../components/TextSection';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-primary dark:bg-dark-primary">
      <ContactOrb />
      <Hero
        tagline="Buy my product"
        title={
          <p>
            CI<span className="text-orange">O</span> Development - Have your own
            bespoke website
          </p>
        }
        description="Enter your super app's description here... The key is to find the
        right length. Don't want it to be too long, but then don't want it to
        be too short so that it looks weird between the title and button
        below."
        imageSrc={'/hero.svg'}
      />
      <TextSection
        title="I'll Build The Website You're Looking For!"
        text={
          <p className="max-w-5xl my-5 text-xl font-normal leading-6 text-justify font-poppins xs:text-2xl xs:px-8 xs:leading-7 dark:dark-text text-light-text">
            From an online retailer, to a coffee shop, to advertising a service
            or even starting a takeaway we have your back. We&apos;ll build your
            site from the ground up with care and attention. Stand out from the
            crowd with something unique and personal to{' '}
            <span className="text-orange">your</span> business.
          </p>
        }
      />
      <Pricing />
      <VideoHero
        videoM4v={'http://media.w3.org/2010/05/sintel/trailer.mp4'}
        videoWebm={'http://media.w3.org/2010/05/sintel/trailer.webm'}
        poster={'https://picsum.photos/200/300'}
        smallTitle={'Welcome'}
        mainTitle={'CIO'}
        highlightText="Development"
        subTitle={'take on the journey'}
      />
      <WhatWeCanOffer />
      {/* Section with video and Title showcasing sites and ease of use */}
      {/* // TODO: Video showcasing Auth login/ CMS control */}
      {/* sites including; Coffee Shop, Ecommerce and, Landing page */}
      {/* Clients marquee w/ card */}
      {/* // TODO: Card */}
      <MeetMeSection />
      <Clients />
      <Testimonials />
      {/* Templates section with tabs to website examples */}
      <FAQ />
      {/* Contact orb position fixed to the righthand corner w/ contact methods/form */}
      <Footer />
    </div>
  );
}
