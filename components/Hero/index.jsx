import React from 'react';
import Image from 'next/image';

import useBreakpoint from '../../hooks/useBreakpoint';

import botella from '../../public/botella.png';

const Hero = () => {
  const isMobile = !useBreakpoint('sm');

  return isMobile ? (
    <section className="bg-background h-screen w-full"></section>
  ) : (
    <section className="z-10">
      <video
        autoPlay
        loop
        muted
        className="object-cover overflow-hidden max-h-[54rem] w-full"
      >
        <source src="video.mp4" type="video/mp4" />
      </video>
      <div className="hidden sm:block sm:absolute bottom-0 xl:left-28 w-5/12">
        <Image src={botella} alt="Cordillera" layout="responsive" />
      </div>
    </section>
  );
};

export default Hero;
