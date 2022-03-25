import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import CorLogo from '../../CorLogo';

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-16 px-2 pt-4 pb-40 w-full bg-surface text-white-cor">
      <section className="flex flex-row justify-around items-center w-full">
        <Link href="/" passHref>
          <motion.button>
            <CorLogo />
          </motion.button>
        </Link>

        <div className="flex flex-row item-rigth space-x-5 sm:space-x-16">
          <Link href="/products" passHref>
            <motion.button>Productos</motion.button>
          </Link>
          <Link href="/us" passHref>
            <motion.button>Sobre nosotros</motion.button>
          </Link>
        </div>
      </section>
      <section className="flex flex-row justify-around items-center w-full">
        <div>contacto</div>
        <div className="flex flex-row space-x-5 sm:space-x-16">
          <div>facebook</div>
          <div>instagram</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
