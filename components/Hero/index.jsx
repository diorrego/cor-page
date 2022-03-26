import React from 'react';

const Hero = () => {
  return (
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
