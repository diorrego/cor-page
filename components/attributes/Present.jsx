import React from 'react';
import Image from 'next/image';

import CorLogo from '../CorLogo';

import cordillera from '../../public/cordillera.jpg';

const Present = () => {
  return (
    <section className="relative overflow-y-hidden sm:h-96">
      <Image src={cordillera} alt="Nevados de Chillán" layout="responsive" />
      <div className="absolute flex flex-col justify-center items-start left-8 top-8 py-1 sm:py-0 sm:top-3.5 xl:inset-20 xl:left-96 space-y-2 max-w-[17rem] sm:max-w-md bg-white-cor/60 px-4 rounded-lg">
        <h1 className="title">Un regalo de la naturaleza</h1>
        <p className="description hidden sm:block">
          <CorLogo className="inline" /> es extraída y producida en un paraje
          virgen e inmaculado posado en la falda de la joven Cordillera de los
          Andes.
        </p>
        <h2 className="font-semibold">Atacalco | Región del Ñuble | Chile</h2>
      </div>
    </section>
  );
};

export default Present;
