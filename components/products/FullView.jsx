import React from 'react';
import Image from 'next/image';

const FullView = ({ image, title, name, description }) => {
  return (
    <div className="flex flex-col space-y-4 px-96 bg-primary pb-60">
      <h1 className="title mb-10">{title}</h1>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="description">{description}</p>
      <div className="flex flex-row items-center justify-around">
        <Image src={image} alt={name} />
        <div>Info nutricional, peso, diseño botella, etc.</div>
      </div>
    </div>
  );
};

export default FullView;
