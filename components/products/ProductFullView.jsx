import React from 'react';
import Image from 'next/image';

const ProductFullView = ({ image, slogan, name, description, className }) => {
  return (
    <div className={`flex flex-col space-y-4 px-8 xl:px-96 ${className}`}>
      <h1 className="title mb-10">{slogan}</h1>
      <h2 className="subtitle">{name}</h2>
      <p className="description">{description}</p>
      <div className="flex flex-row items-center justify-between sm:justify-around">
        <Image src={image} alt={name} />
        <div>Info nutricional, peso, diseño botella, etc.</div>
      </div>
    </div>
  );
};

export default ProductFullView;
