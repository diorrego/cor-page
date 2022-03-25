import React from 'react';

const Hero = () => {
  return (
    <section>
      <video
        autoPlay
        loop
        muted
        className="object-cover overflow-hidden h-screen sm:h-full w-full"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
