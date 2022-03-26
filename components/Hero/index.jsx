import React from 'react';

import useBreakpoint from '../../hooks/useBreakpoint';

const Hero = () => {
  const isMobile = !useBreakpoint('sm');

  return isMobile ? (
    <section className="bg-background h-screen w-full"></section>
  ) : (
    <section>
      <video
        autoPlay
        loop
        muted
        className="object-cover overflow-hidden max-h-[54rem] w-full"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
