import React from 'react';
import Image from 'next/image';

import botellaVidrio from '../../public/botellaVidrio.jpeg';

const Unique = () => {
  return (
    <section className="flex flex-col space-y-8 px-3.5 py-4 sm:px-96 sm:py-20 bg-sky-500">
      <h1 className="text-3xl">
        <span className="font-semibold">Única</span> para tu estilo
      </h1>
      <div className="flex flex-col space-y-8 sm:space-y-0 sm:space-x-20 sm:flex-row">
        <div className="flex flex-col items-center sm:space-y-4">
          <h2 className="text-xl font-medium">Cordillera</h2>
          <p className="text-md">
            <span className="font-medium">Estilo y comodidad.</span> Recibe la
            energía de la cordillera en un elegante cristal.
          </p>
          <Image src={botellaVidrio} alt="Botella cordillera" />
        </div>
        <div className="flex flex-col items-center sm:space-y-4">
          <h2 className="text-xl font-medium">Viento</h2>
          <p className="text-md">
            <span className="font-medium">
              Para los amantes del movimiento...
            </span>{' '}
            Resistente y amigable con el medio ambiente.
          </p>
          <Image src={botellaVidrio} alt="Botella viento" />
        </div>
      </div>
    </section>
  );
};

export default Unique;
