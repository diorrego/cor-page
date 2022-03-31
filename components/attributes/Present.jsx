import React from 'react';
import Image from 'next/image';

import corView from '../../public/corView.jpg';

const Present = () => {
  return (
    <section className="relative overflow-y-hidden ">
      <Image src={corView} alt="Vista Cordillera" layout="responsive" />
      <div className="absolute flex flex-col justify-center space-y-2 bg-white-cor/60 rounded-lg p-auto inset-96 text-center">
        <h1 className="title">Un regalo de la naturaleza</h1>
        <p className="description hidden sm:block">
          Cor es extraída y producida en un paraje virgen e inmaculado posado en
          la falda de la joven Cordillera de los Andes.
        </p>
        <h2 className="font-semibold">Atacalco | Región del Ñuble | Chile</h2>
      </div>
    </section>
  );
};

export default Present;
