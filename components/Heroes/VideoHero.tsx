import React from 'react';

interface IVideoHero {
  videoM4v: string;
  videoWebm: string;
  poster: string;
  smallTitle: string;
  mainTitle: string;
  highlightText?: string;
  subTitle?: string;
}

function VideoHero({
  videoM4v,
  videoWebm,
  poster,
  smallTitle,
  mainTitle,
  highlightText,
  subTitle,
}: IVideoHero) {
  return (
    <section className="relative flex items-center justify-center h-screen mb-6 font-poppins">
      <div className="absolute w-full h-full overflow-hidden">
        <video
          className="absolute inset-0 object-cover min-w-full min-h-full opacity-30"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoWebm} type="video/webm; codecs=vp9" />
          <source src={videoM4v} type="video/mp4; codecs=hvc1" />
        </video>
      </div>
      <div className="z-10 px-8 text-center drop-shadow-lg shadow-black">
        <p className="mb-4 text-sm uppercase">{smallTitle}</p>
        <h4 className="text-5xl">
          {mainTitle}
          {highlightText && (
            <span className="text-orange">{` ${highlightText}`}</span>
          )}
        </h4>
        <p className="mt-4 text-sm uppercase">{subTitle}</p>
      </div>
    </section>
  );
}

export default VideoHero;
