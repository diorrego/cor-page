import React from 'react';

import ProductSimpleView from '../products/ProductSimpleView';

import botellaVidrio from '../../public/botellaVidrio.jpeg';

const Unique = () => {
  return (
    <section className="flex flex-col space-y-12 px-8 py-4 sm:px-96 sm:py-20">
      <h1 className="title">Única para tu estilo</h1>
      <div className="sm:flex sm:flex-row sm:justify-around">
        <ProductSimpleView
          slogan="Única y exclusiva"
          image={botellaVidrio}
          name="Cordillera"
        />
        <ProductSimpleView
          slogan="Única y divertida"
          image={botellaVidrio}
          name="Viento"
        />
      </div>
    </section>
  );
};

export default Unique;
