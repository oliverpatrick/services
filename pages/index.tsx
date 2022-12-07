import Clients from '../components/Marquee/Clients';
import FAQ from '../components/FAQ/FAQ';
import Hero from '../components/Heroes/Hero';
import MeetMeSection from '../components/MeetMeSection';
import VideoHero from '../components/Heroes/VideoHero';
import WhatWeCanOffer from '../components/WhatWeCanOffer';
import Footer from '../components/Footer';
import ContactOrb from '../components/ContactOrb';

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-primary dark:bg-dark-primary">
      <ContactOrb />
      {/* Image Hero w/ CTA */}
      {/* Section with image/text + Transition from each side to center */}
      <Hero
        tagline="Buy my product"
        title="CIO Development - Have your own bespoke website!"
        description="Enter your super app's description here... The key is to find the
        right length. Don't want it to be too long, but then don't want it to
        be too short so that it looks weird between the title and button
        below."
        imageSrc={'/hero.svg'}
      />
      <MeetMeSection />
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
      <h1>I'll build the website you're looking for!</h1>
      From an online retailer, to a coffee shop to advertising a service or even
      starting a takeaway. I'll build your site from the ground up with care and
      attention. Stand out from the crowd with something unique and personal to
      you.
      <br></br>
      <code>Include breakdown of costs between wix/</code>
      Include cost breakdowns of big website retailers - ''research''
      {/* Section with video and Title showcasing sites and ease of use */}
      {/* // TODO: Video showcasing Auth login/ CMS control */}
      {/* sites including; Coffee Shop, Ecommerce and, Landing page */}
      {/* Clients marquee w/ card */}
      {/* // TODO: Card */}
      <Clients />
      Testimonials and Reviews
      {/* Templates section with tabs to website examples */}
      <FAQ />
      Contact form
      <br></br>
      {/* Contact orb position fixed to the righthand corner w/ contact methods/form */}
      <Footer />
    </div>
  );
}
