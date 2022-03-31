import React from 'react';

import ProductSimpleView from '../products/ProductSimpleView';
import TreePeaks from '../peaks/TreePeaks';

import botellaVidrio from '../../public/botellaVidrio.jpeg';

const Unique = () => {
  return (
    <section className="flex flex-col">
      <div className="flex-col space-y-16 bg-gradient-to-b to-white-cor from-background py-64 px-auto">
        <h1 className="title pl-96 ">Muévete con estilo</h1>
        <ProductSimpleView
          slogan="Única y divertida"
          image={botellaVidrio}
          name="Viento"
        />
      </div>
      <TreePeaks className="z-20 -mt-28" />
      <div className="flex-col space-y-16 bg-surface py-64 px-auto text-white-cor">
        <h1 className="title pl-96  ">Siente la cordillera</h1>
        <ProductSimpleView
          slogan="Única y exclusiva"
          image={botellaVidrio}
          name="Cordillera"
        />
      </div>
    </section>
  );
};

export default Unique;
