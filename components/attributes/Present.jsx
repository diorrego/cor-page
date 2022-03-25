import React from 'react';
import Image from 'next/image';

import cordillera from '../../public/cordillera.jpg';

const Present = () => {
  return (
    <section className="relative overflow-y-hidden sm:h-96">
      <Image src={cordillera} alt="Nevados de Chillán" layout="responsive" />
      <div className="absolute flex flex-col items-start inset-3.5 xl:inset-20 xl:left-96 space-y-2 max-w-md text-white">
        <h1 className="text-3xl">
          Un <span className="font-semibold">Regalo</span> de la naturaleza
        </h1>
        <p className="text-md">
          Cor es extraída y producida en un paraje virgen e inmaculado posado en
          la falda de la joven Cordillera de los Andes.
        </p>
        <h2 className="font-medium">Atacalco | Región del Ñuble | Chile</h2>
      </div>
    </section>
  );
};

export default Present;
