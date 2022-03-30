import React from 'react';

import ProductSimpleView from '../products/ProductSimpleView';
import TreePeaks from '../peaks/TreePeaks';

import botellaVidrio from '../../public/botellaVidrio.jpeg';

const Unique = () => {
  return (
    <section className="flex flex-col bg-surface pb-28">
      <div className=" bg-gradient-to-b to-white-cor from-background pt-28 pb-32">
        <h1 className="title">Muévete con estilo</h1>
        <ProductSimpleView
          slogan="Única y divertida"
          image={botellaVidrio}
          name="Viento"
        />
      </div>

      <TreePeaks className="z-20 -mt-36" />
      <ProductSimpleView
        slogan="Única y exclusiva"
        image={botellaVidrio}
        name="Cordillera"
      />
    </section>
  );
};

export default Unique;
