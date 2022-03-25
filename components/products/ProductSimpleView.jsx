import React from 'react';
import Image from 'next/image';

const ProductSimpleView = ({ slogan, name, image }) => {
  return (
    <div className="flex flex-col items-center sm:space-y-4">
      <h2 className="subtitle">{name}</h2>
      <p className="description">{slogan}</p>
      <Image src={image} alt={name} />
    </div>
  );
};

export default ProductSimpleView;
