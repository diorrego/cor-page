import React from 'react';

import ProductSimpleView from '../products/ProductSimpleView';

import botellaVidrio from '../../public/botellaVidrio.jpeg';

const Unique = () => {
  return (
    <section className="flex flex-col space-y-4 xl:space-y-12 px-8 py-4 sm:py-36 bg-gradient-to-b to-white-cor from-background z-20 -mt-16">
      <div className="sm:flex sm:flex-row sm:justify-around">
        <h1 className="title">Única para tu estilo</h1>
        <div></div>
      </div>
      <div></div>
      <div className="sm:flex sm:flex-row sm:justify-evenly">
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
