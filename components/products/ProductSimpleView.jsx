import React from 'react';
import Image from 'next/image';

const ProductSimpleView = ({ slogan, name, image }) => {
  return (
    <div className="flex flex-row justify-evenly">
      <div className="flex-col">
        <h2 className="subtitle">{name}</h2>
        <p className="description">{slogan}</p>
      </div>
      <Image src={image} alt={name} />
    </div>
  );
};

export default ProductSimpleView;
