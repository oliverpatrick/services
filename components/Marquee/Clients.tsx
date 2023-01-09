/* eslint-disable @next/next/no-img-element */
import Marquee from 'react-fast-marquee';
import { clients } from '../../constants';

const Clients = () => (
  <section className="flex flex-col items-center justify-center px-16">
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mt-20 text-center sm:flex-row">
      <div className="sm:flex-1 w-full h-[1px] dark:bg-[#2A2C30] bg-[#D8E5FF]" />
      <p className="font-poppins xs:text-xl xs:leading-[22px] text-md leading-[20px] font-normal flex-[1.5] dark:text-[#A3B3BC] text-[#5B6478] mx-4 sm:py-0 py-4">
        {`Our Works`}
      </p>
      <div className="sm:flex-1 w-full h-[1px] dark:bg-[#2A2C30] bg-[#D8E5FF]" />
    </div>
    <div className="w-full flex items-center justify-center max-w-6xl mt-5 xs:justify-between">
      <Marquee gradient={false} speed={50}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 justify-center flex items-center sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={'https://picsum.photos/200/300'}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  </section>
);

export default Clients;
